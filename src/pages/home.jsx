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
                my: 3,
                px: 3
            }}>The Fairfield Programming Association is a open-source organization that runs programs and offers resources all to educate children in the area of computer science.</Text>
            
            <div sx={{
                display: 'grid',
                gridGap: 1,
                gridTemplateColumns: '1fr 1fr',
            }}>
                <Button as="a" href="/signup" variant="buttons.primary">Signup</Button>
                <Button as="a" href="/login" variant="buttons.secondary">Login</Button>
            </div>
        </div>
        <Footer />
    </>);

}