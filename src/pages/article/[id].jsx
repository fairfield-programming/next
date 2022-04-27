import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet"

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import Header from "../../components/header";
import Footer from "../../components/footer";

import Responsibility from "../../components/responsibility";

/** @jsx jsx */
import { Avatar, Link, Image, Spinner, Card, Heading, Text, jsx } from 'theme-ui';

export function onRequestGet({ env, request }) {
    return env.ASSETS.fetch(
      new Request(
        new URL("/user/:id/", request.url).toString(),
        request
      )
    );
}

function QuickImage({ src, alt }) {

  return <div sx={{ p: 3, mx: 'auto', display: 'flex', alignItems: 'center', flexDirection: 'column', maxWidth: "70%", maxHeight: "50%" }}>
    <Image sx={{ height: '100%', borderRadius: 4 }} src={src} alt={alt} />
    <Text sx={{ width: '100%', p: 2, textAlign: 'center' }}>{ alt }</Text>
  </div>;

}

export async function getServerData(context) {

    let articleId = context.params['*'];

    try {
        const res = await fetch(`https://fpa-learn.herokuapp.com/article/${articleId}/safe`)

        if (!res.ok) {
            throw new Error(`Response failed`)
        }

        const articleData = await res.json();

        return {
          props: { ...articleData, id: articleId }
        }

      } catch (error) {

        return {
          status: 404,
          headers: {},
          props: {}
        }

    }

}

export default function UserPage({ serverData }) {

    let articleData = serverData;
    let articleMarkdown = serverData.markdown;

    let structuredData = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://google.com/article"
      },
      "headline": articleData.title,
      "image": articleData.markdown.filter(element => element.type == 'img').map(element => element.src),
      "datePublished": articleData.createdAt,
      "dateModified": articleData.updatedAt,
      "author": {
        "@type": "Person",
        "name": articleData.username, // TODO: Add username
        "url": "https://fairfieldprogramming.org/user/" + articleData.userId
      },
      "publisher": {
        "@type": "Organization",
        "name": "The Fairfield Programming Association",
        "logo": {
          "@type": "ImageObject",
          "url": "https://fairfieldprogramming.org/logo.png"
        }
      }
    };

    return (<>
      <Helmet>
        <title>{ `${articleData.title} - ${articleData.username} - The Fairfield Programming Association` }</title>
        <meta property="og:title" content={ `${articleData.title} - ${articleData.username} - The Fairfield Programming Association` } />
        <link rel="canonical" href={`https://fairfieldprogramming.org/article/${articleData.id}`} />
        <meta property="og:url" content={`https://fairfieldprogramming.org/article/${articleData.id}`} />
        <meta name="description" content={articleData.description} />
        <meta property="og:description" content={articleData.description} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <Header />
      <div sx={{
        maxWidth: 800,
        mx: 'auto',
        my: 6
      }}>
            <Card sx={{ width: '100%', my: 0, py: 0, mb: 4 }}>
                <Heading as="h1" sx={{ fontSize: 6, mb: 2 }}> { articleData.title } </Heading>
                <Responsibility align='left' userId={articleData.userId} size={2} />
            </Card>
            <Card sx={{ my: 0, py: 0, textAlign: 'justify' }}>
                { articleMarkdown.map(element => {

                    if (element.type === 'h2') return <Heading as="h2" sx={{ my: 4, display: 'block', fontSize: 5 }}>{ element.data }</Heading>
                    if (element.type === 'h3') return <Heading as="h3" sx={{ my: 4, display: 'block', fontSize: 4 }}>{ element.data }</Heading>
                    if (element.type === 'h4') return <Heading as="h4" sx={{ my: 4, display: 'block', fontSize: 3 }}>{ element.data }</Heading>
                    if (element.type === 'p') return <Text sx={{ my: 4, display: 'block', fontSize: 2, lineHeight: 2, width: '100%' }}>{element.data }</Text>;

                    if (element.type === 'block-code') return <SyntaxHighlighter sx={{ borderRadius: 2, minHeight: 200 }} language={element.language}>{ element.data }</SyntaxHighlighter>;

                    if (element.type === 'img') return <QuickImage alt={element.alt} src={element.src} />

                }) }
            </Card>
      </div>
      <Footer />
    </>);

}