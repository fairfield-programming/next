import React from "react";
import { Helmet } from "react-helmet"

import Header from "../components/header";
import Footer from "../components/footer";

/** @jsx jsx */
import { Text, Heading, Button, Grid, Card, jsx } from 'theme-ui';

export default function HomePage() {

    return (<>
        <Helmet>
            <title>{ `Home - The Fairfield Programming Association` }</title>
            <meta property="og:title" content="Home - The Fairfield Programming Association" />
            <link rel="canonical" href="https://fairfieldprogramming.org/" />
            <meta property="og:url" content="https://fairfieldprogramming.org/" />
            <meta name="description" content="The Fairfield Programming Association is a open-source organization that runs programs and offers resources all to educate children in the area of computer science." />
            <meta property="og:description" content="The Fairfield Programming Association is a open-source organization that runs programs and offers resources all to educate children in the area of computer science." />
        </Helmet>
        <Header />
        <div sx={{
            maxWidth: 600,
            mx: 'auto',
            display: 'flex',
            flexDirection: 'column',
            height: 700,
            alignItems: 'center',
            justifyContent: 'center',
            space: 4
        }}>
            <Heading sx={{
                fontSize: 6,
                my: 0
            }} as='h1'>Join the FPA!</Heading>
            <Text sx={{
                fontSize: 3,
                fontWeight: '300',
                my: 3
            }}>The Fairfield Programming Association is a open-source organization that runs programs and offers resources all to educate children in the area of computer science.</Text>
            
            <div sx={{
                display: 'grid',
                gridGap: 1,
                gridTemplateColumns: ['auto', '1fr 1fr'],
            }}>
                <Button as="a" href="/signup" variant="buttons.primary">Signup</Button>
                <Button as="a" href="/login" variant="buttons.secondary">Login</Button>
            </div>
        </div>
        <Grid gap={2} columns={'1fr 1fr'} sx={{
            maxWidth: 800,
            mx: 'auto'
        }}>
            <Card sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Heading>Education Resources</Heading>
                <Text sx={{ my: 3, textAlign: 'justify' }}>We offer educational resources in the forms of articles, videos, and interactive quizzes that can enhance your knowledge of computer science. All of these resources are availible under a modified-ISC license.</Text>
                <Button variant="buttons.secondary">Check Them Out</Button>
            </Card>
            <Card sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Heading>Coding Competitions</Heading>
                <Text sx={{ my: 3, textAlign: 'justify' }}>Our coding competitions are a collaborative effort between all of the highschools in the Fairfield County area. They are run by students, and we hope to expand to the wider Northeast soon.</Text>
                <Button variant="buttons.secondary">Learn More</Button>
            </Card>
            <Card sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Heading>Hour of Code</Heading>
                <Text sx={{ my: 3, textAlign: 'justify' }}>Many people do not have wide access to computers or devices to access our digital content. It is our mission to teach those who may not have access to learning devices, how to code.</Text>
                <Button variant="buttons.secondary">How Can I help?</Button>
            </Card>
            <Card></Card>
        </Grid>
        <Footer />
    </>);

}