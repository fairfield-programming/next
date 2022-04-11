import React, { useEffect, useState } from 'react';
import { Helmet } from "react-helmet"

import Header from "../../components/header";
import Footer from "../../components/footer";

/** @jsx jsx */
import { Box, Avatar, Card, Heading, Text, Flex, NavLink,  jsx, Divider, Spinner } from 'theme-ui';

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


// QUESTIONS SHOULD HAVE REACTIONS 
// - SIMILAR TO DISCORD EMOJIS
// STANDARDIZE ALL QUESTION PAGES SO THEY FOLLOW [MAIN-SIDEBAR](75%-25%) LAYOUT
// Add user info under each answer
// Make comment system as easy and delicous as possible
// More comments means more interaction and content
// Under question, maybe make user info large

// Comment ui should not be inside box, it should be directly under it
// this will allow you to add comments inbetween answer and the comment input
// cleans up ui so less hierarchicile shadow boxes

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
        "text": (serverData.Answers[0] || { body: "" }).body || "This post doesn't have any text...",
        "upvoteCount": (serverData.Answers[0] || { upvotes: 0 } ).upvotes,
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

  let [ related, setRelated ] = useState(null);

  useEffect(() => {

    fetch(`https://fpa-questions.herokuapp.com/question/${serverData.id}/related`).then((response) => {

      return response.json();

    }).then((data) => {

      setRelated(data);

    })

  }, [])

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
        <Flex sx={{
                maxWidth: 1200,
                mx: 'auto',
            }}>
          <Box p={2} sx={{ width: '75%', display: 'block', alignItems: 'center', justifyContent: 'center' }}>
            <Card >
              <Heading as="h1">{ serverData.title }</Heading>
              <Text>{ serverData.body || "This question doesn't have a description..." }</Text>
              <Box sx={{ height: 60 }} /> 
              <Heading as="h2">{(answers.length == 0) ? "No " : "" }Answers</Heading>
              <div>
                {
                  answers.map((answer) => {

                    return <Card variant="bordered">
                      <Flex as="a" href={`/user/${answer.user}`} sx={{ textDecoration: 'none', color: 'inherit', width: '100%', height: '40px', alignItems: "center", justifyContent: "flex-end", flexDirection: 'row' }} alignItems={"center"} justifyContent={"center"}>
                        <Text mx={2}>User #{answer.user}</Text>
                        <Avatar size={30} src="https://placebear.com/300/300"></Avatar>
                      </Flex>
                      <Text>{ answer.body }</Text>
                    </Card>

                  })
                }
              </div>
              <Box sx={{ height: 200 }} />
            </Card>
          </Box>
          <Box py={2} sx={{ width: '25%', display: 'block', alignItems: 'center', justifyContent: 'center' }}>
            <Card p={2} sx={{ boxSizing: 'border-box', minHeight: '400px', width: '100%' }} variant="cards.bordered">
                <NavLink sx={{ width: '100%' }} onClick={() => { ('trending') }} href="/questions/#trending" p={2}>
                    📈 Trending
                </NavLink>
                <NavLink sx={{ width: '100%' }} onClick={() => { ('recent') }} href="/questions/#recent" p={2}>
                    🆕 Recent
                </NavLink>
                <NavLink sx={{ width: '100%' }} onClick={() => { ('unanswered') }} href="/questions/#unanswered" p={2}>
                    🙋 Unanswered
                </NavLink>
                <Divider color={'transparent'} sx={{ background: 'background' }}></Divider>
                <Heading as={'h3'}>Related</Heading>
                <div sx={{ width: "100%", minHeight: 40, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                  {(related != null) ? related.slice(0, 5).map((item) => {

                    return (
                      <Text py={2} sx={{ display: "block", width: '100%', fontSize: 1, textDecoration: 'none' }} as={'a'} href={"/question/" + item.id}>{ item.title }</Text>
                    );

                  }) : <Spinner size={20} /> }
                </div>
            </Card>
          </Box>
        </Flex> 
      </Box>
      <Footer />
  </>);

}