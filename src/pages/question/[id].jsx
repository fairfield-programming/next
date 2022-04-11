import React from 'react';
import { Helmet } from "react-helmet"

import Header from "../../components/header";
import Footer from "../../components/footer";

/** @jsx jsx */
import { Box, Card, Heading, Text, jsx, Divider } from 'theme-ui';

export function onRequestGet({ env, request }) {
    return env.ASSETS.fetch(
      new Request(
        new URL("/questions/:id/", request.url).toString(),
        request
      )
    );
}

export async function getServerData(context) {

    let questionId = context.params['*'];

    try {
        const res = await fetch(`https://fpa-questions.herokuapp.com/question/${questionId}`)

        if (!res.ok) {
            throw new Error(`Response failed`)
        }

        const questionData = await res.json();

        return {
          props: { ...questionData, id: questionId }
        }

      } catch (error) {

        return {
          status: 500,
          headers: {},
          props: {}
        }

    }

}

export default function QuestionPage({ serverData }) {

  let answers = serverData.Answers;

  let structuredData = {
    "@context": "https://schema.org",
    "@type": "QAPage",
    "mainEntity": {
      "@type": "Question",
      "name": serverData.title || "This post doesn't have a title...",
      "text": serverData.body || "This post doesn't have any text...",
      "answerCount": answers.length || 0,
      "upvoteCount": serverData.upvotes || 0,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": serverData.Answers[0].body || "This post doesn't have any text...",
        "upvoteCount": serverData.Answers[0].upvotes || 0,
        "url": `https://fairfieldprogramming.org/question/${serverData.id}`
        },
      "suggestedAnswer": 
      serverData.Answers.map((answer) => {

        return {
          "@type": "Answer",
          "text": answer.body || "This post doesn't have any text...",
          "upvoteCount": answer.upvotes || 0,
          "url": `https://fairfieldprogramming.org/question/${serverData.id}`
        };

      })
    }
  };

  return (<>
      <Header />
      <Helmet>
        <title>{ `${serverData.title} - The Fairfield Programming Association` }</title>
        <meta property="og:title" content={ `${serverData.title} - The Fairfield Programming Association` } />
        <link rel="canonical" href={`http://fairfieldprogramming.org/question/${serverData.id}`} />
        <meta property="og:url" content={`http://fairfieldprogramming.org/question/${serverData.id}`} />
        <meta property='description' content={serverData.body || "This question doesn't have a description..."} />
        <meta property="og:description" content={serverData.body || "This question doesn't have a description..."} />
        <script type="application/ld+json">
        {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <Box sx={{ marginTop: 80, maxWidth: 1000, mx: 'auto', p: 4 }}>
          <Heading as="h1">{ serverData.title }</Heading>
          <Text>{ serverData.body || "This question doesn't have a description..." }</Text>
          <Box sx={{ height: 60 }} /> 
          <Heading as="h2">{(answers.length == 0) ? "No " : "" }Answers</Heading>
          <div>
            {
              answers.map((answer) => {

                return <Card variant="bordered">
                  <Text>{ answer.body }</Text>
                </Card>

              })
            }
          </div>
          <Box sx={{ height: 200 }} /> 
      </Box>
      <Footer />
  </>);

}