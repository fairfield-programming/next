import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet"

import Header from "../../components/header";
import Footer from "../../components/footer";

import Responsibility from "../../components/responsibility";

/** @jsx jsx */
import { Avatar, Link, Spinner, Card, Heading, Text, jsx } from 'theme-ui';

export function onRequestGet({ env, request }) {
    return env.ASSETS.fetch(
      new Request(
        new URL("/user/:id/", request.url).toString(),
        request
      )
    );
}

export async function getServerData(context) {

    let articleId = context.params['*'];

    try {
        const res = await fetch(`https://fpa-learn.herokuapp.com/article/${articleId}`)

        // if (!res.ok) {
        //     throw new Error(`Response failed`)
        // }

        const articleData = await res.json();

        return {
          props: { ...articleData, id: articleId }
        }

      } catch (error) {

        return {
          status: 500,
          headers: {},
          props: {}
        }

    }

}

export default function UserPage({ serverData }) {

    let articleData = {
        title: 'Introduction to Javascript',
        description: 'This is a test.',
        user: {
            name: 'William McGonagle'
        }
    };

    let articleMarkdown = [
        {
            type: 'h2',
            data: 'this is a heading 2'
        },
        {
            type: 'h3',
            data: 'this is a heading 3'
        },
        {
            type: 'h4',
            data: 'this is a heading 4'
        },
        {
            type: 'p',
            data: 'this is a test'
        }
    ];

    return (<>
      <Helmet>
        <title>{ `${articleData.title} - ${articleData.user.name} - The Fairfield Programming Association` }</title>
        <meta property="og:title" content={ `${articleData.title} - ${articleData.user.name} - The Fairfield Programming Association` } />
        <link rel="canonical" href={`https://fairfieldprogramming.org/article/${articleData.id}`} />
        <meta property="og:url" content={`https://fairfieldprogramming.org/article/${articleData.id}`} />
        <meta name="description" content={articleData.description} />
        <meta property="og:description" content={articleData.description} />
      </Helmet>
      <Header />
      <div sx={{
        maxWidth: 800,
        mx: 'auto',
        my: 6
      }}>
            <Card sx={{ width: '100%', my: 0, py: 0, mb: 4 }}>
                <Heading as="h1" sx={{ fontSize: 6, mb: 2 }}> { articleData.title } </Heading>
                <Responsibility align='left' userId={6} size={2} />
            </Card>
            <Card sx={{ my: 0, py: 0, textAlign: 'justify' }}>
                { articleMarkdown.map(element => {

                    if (element.type === 'h2') return <Heading as="h2" sx={{ my: 4, display: 'block', fontSize: 5 }}>{ element.data }</Heading>
                    if (element.type === 'h3') return <Heading as="h3" sx={{ my: 4, display: 'block', fontSize: 4 }}>{ element.data }</Heading>
                    if (element.type === 'h4') return <Heading as="h4" sx={{ my: 4, display: 'block', fontSize: 3 }}>{ element.data }</Heading>
                    if (element.type === 'p') return <Text sx={{ my: 4, display: 'block', fontSize: 2, lineHeight: 2, width: '100%' }}>{element.data }</Text>;

                }) }
            </Card>
      </div>
      <Footer />
    </>);

}