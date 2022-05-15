import React, { useEffect, useState } from 'react';
import { Helmet } from "react-helmet"

import Header from "../../components/header";
import Footer from "../../components/footer";
import Answer from "../../components/answer";

import Masthead from "../../theme/components/masthead";
import Heading from "../../theme/components/heading";
import Label from "../../theme/components/label";
import Together from "../../theme/components/together";
import Bin, { BinLink } from "../../theme/components/bin";
import Sidebar from "../../theme/components/sidebar";
import Paragraph from "../../theme/components/paragraph";
import Link from "../../theme/components/link";

/** @jsx jsx */
import { Box, Avatar, Card, Text, Flex, NavLink,  jsx, Divider, Spinner } from 'theme-ui';

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

function distanceFromDate(dateObject) {

  if (typeof dateObject == 'undefined') return '';

  let difference = Date.now() - new Date(dateObject).getTime()

  let differenceInMonths = difference / (1000 * 60 * 60 * 24 * 30);
  let actualDifferenceInMonths = differenceInMonths - Math.round(differenceInMonths);
  let shownDifferenceInMonths = Math.round(differenceInMonths);

  let differenceInWeeks = actualDifferenceInMonths * 4;
  let actualDifferenceInWeeks = differenceInWeeks - Math.round(differenceInWeeks);
  let shownDifferenceInWeeks = Math.round(differenceInWeeks);

  let differenceInDays = actualDifferenceInWeeks * 30;
  let actualDifferenceInDays = differenceInDays - Math.round(differenceInDays);
  let shownDifferenceInDays = Math.round(differenceInDays);

  let differenceInHours = actualDifferenceInDays * 24;
  let actualDifferenceInHours = differenceInHours - Math.round(differenceInHours);
  let shownDifferenceInHours = Math.round(differenceInHours);

  let output = [];

  if (shownDifferenceInMonths > 0) output.push(`${shownDifferenceInMonths} ${shownDifferenceInMonths == 1 ? ('Month') : ('Months')}`);
  if (shownDifferenceInWeeks > 0) output.push(`${shownDifferenceInWeeks} ${shownDifferenceInWeeks == 1 ? ('Week') : ('Weeks')}`);
  if (shownDifferenceInDays > 0) output.push(`${shownDifferenceInDays} ${shownDifferenceInDays == 1 ? ('Day') : ('Days')}`);
  if (shownDifferenceInHours > 0) output.push(`${shownDifferenceInHours} ${shownDifferenceInHours == 1 ? ('Hour') : ('Hours')}`);

  return `${output.join(', ')} ago`;

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
      <Masthead inline>
        <Together>
          <Heading type="h1">{ serverData.title }</Heading>
          <div style={{ marginBottom: '10px' }}>
            <Together style={{ margin: '0px 10px' }} inline>
              <Label light>Posted </Label>
              <Label>{ distanceFromDate(serverData.createdAt) }. </Label>
            </Together>
            <Together style={{ margin: '0px 10px' }} inline>
              <Label light>Edited </Label>
              <Label>{ distanceFromDate(serverData.updatedAt) }. </Label>
            </Together>
          </div>
        </Together>
      </Masthead>
      <Box sx={{ maxWidth: 1000, mx: 'auto' }}>
        <Flex sx={{
                maxWidth: 1200,
                mx: 'auto',
            }}>
          <Box p={2} sx={{ width: '75%', display: 'block', alignItems: 'center', justifyContent: 'center' }}>
            <Card >
              <Text>{ serverData.body || "This question doesn't have a description..." }</Text>
              <Box sx={{ height: 60 }} /> 
              <Heading type="h3">{(answers.length == 0) ? "No " : "" } Answers</Heading>
              <div>
                {
                  answers.map((answer) => {

                    return <Answer data={answer} />

                  })
                }
              </div>
            </Card>
          </Box>
          <Sidebar side="left">
            <Bin vertical>
              <BinLink to={`/`} text="🆕 Recent" />
              <BinLink to={`/`} text="📈 Trending" />
              <BinLink to={`/`} text="🤔 Unanswered" />
            </Bin>
            <div style={{ padding: "0px 25px" }}>
              <Heading type='h4'>Related</Heading>
              <div sx={{ width: "100%", minHeight: 40, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                {(related != null) ? related.slice(0, 5).map((item) => {

                  return (
                    <Link list href={"/question/" + item.id}>{ item.title }</Link>
                  );

                }) : <Spinner size={20} /> }
              </div>
            </div>
          </Sidebar>
        </Flex> 
      </Box>
      <Footer />
  </>);

}