import React from "react";
import { Helmet } from "react-helmet"

import Header from "../components/header";
import Footer from "../components/footer";

/** @jsx jsx */
import { Text, Heading, Button, Grid, Card, jsx } from 'theme-ui';

export default function AboutPage() {

    return (
    <>
        <Helmet>
            <title>{ `About - The Fairfield Programming Association` }</title>
            <meta property="og:title" content="About - The Fairfield Programming Association" />
            <link rel="canonical" href="https://fairfieldprogramming.org/about" />
            <meta property="og:url" content="https://fairfieldprogramming.org/about" />
            <meta name="description" content="The Fairfield Programming Association is a open-source organization that runs programs and offers resources all to educate children in the area of computer science." />
            <meta property="og:description" content="The Fairfield Programming Association is a open-source organization that runs programs and offers resources all to educate children in the area of computer science." />
        </Helmet>
        <Header />
        <div sx={{
            maxWidth: 600,
            mx: 'auto',
            display: 'flex',
            flexDirection: 'column',
            height: 500,
            alignItems: 'center',
            justifyContent: 'center',
            space: 4,
            mt: 5
        }}>
            <Heading sx={{
                fontSize: 6,
                my: 0
            }} as='h1'>About the FPA</Heading>
            <Text sx={{
                fontSize: 3,
                fontWeight: '300',
                my: 3
            }}>
                The Fairfield Programming Association is an organization with one goal: educate the world about computer science. If you would like to learn how we do this, read about what we've done below.
            </Text> 
            
        </div>
        <div sx={{
            maxWidth: 800,
            mx: 'auto',
            borderBottomColor: 'background02',
            borderBottomStyle: 'solid',
            borderBottomWidth: 2
        }}>
            <Heading sx={{ fontSize: 5 }}>Our Programs</Heading>
        </div>
        <Grid gap={2} columns={'1fr 1fr'} sx={{
            maxWidth: 800,
            mx: 'auto',
            mb: 5,
            mt: 3
        }}>
            <Card sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Heading>Education Resources</Heading>
                <Text sx={{ my: 3, textAlign: 'justify' }}>We offer educational resources in the forms of articles, videos, and interactive quizzes that can enhance your knowledge of computer science. All of these resources are availible under a modified-ISC license.</Text>
                {/* <Button variant="buttons.secondary">Check Them Out</Button> */}
            </Card>
            <Card sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Heading>Coding Competitions</Heading>
                <Text sx={{ my: 3, textAlign: 'justify' }}>Our coding competitions are a collaborative effort between all of the highschools in the Fairfield County area. They are run by students, and we hope to expand to the wider Northeast soon.</Text>
                {/* <Button variant="buttons.secondary">Learn More</Button> */}
            </Card>
            <Card sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Heading>Hour of Code</Heading>
                <Text sx={{ my: 3, textAlign: 'justify' }}>Many people do not have wide access to computers or devices to access our digital content. It is our mission to teach those who may not have access to learning devices, how to code.</Text>
                {/* <Button variant="buttons.secondary">How Can I help?</Button> */}
            </Card>
        </Grid>
        <Footer />
    </>);

}