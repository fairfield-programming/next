import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet"

import Header from "../components/header";
import Footer from "../components/footer";

/** @jsx jsx */
import { Text, Heading, Input, Button, Grid, Card, Flex, jsx } from 'theme-ui';

export default function HomePage() {

    let [ searchResults, setSearchResults ] = useState([]); 
    let [ searchQuery, setSearchQuery ] = useState(""); 

    useEffect(() => {

        fetch('/api/search?q=' + encodeURIComponent(searchQuery)).then(response => {

            return response.json()

        }).then((data) => {

            setSearchResults(data)

        })

    }, [ searchQuery ])

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
            height: 300,
            alignItems: 'center',
            justifyContent: 'center',
            space: 4,
            mt: 6
        }}>
            <Heading sx={{
                fontSize: 6,
                my: 0
            }} as='h1'>Search the FPA</Heading>
            <Flex mt={3} sx={{ width: '100%', height: 40 }} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
                <Input sx={{ height: 40 }} onChange={(data) => { setSearchQuery(data.target.value) }} placeholder="Search it all..."></Input>
                <Button sx={{ height: 40, mx: 1, display: 'flexd' }} variant="secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                </Button>
            </Flex>
        </div>
        <div sx={{ maxWidth: 800, mx: 'auto' }}>
            { searchResults.map(element => {

                return (
                    <Card variant="cards.bordered" as="a" href={ element.url } sx={{
                        width: '100%',
                        // bg: 'background01',
                        borderRadius: 5,
                        p: 4,
                        display: 'block',
                        color: 'text',
                        textDecoration: 'none'
                        }}>
                            <Heading>{ element.title }</Heading>
                            <Text>{ element.description }</Text>
                    </Card>
                );

            }) }
        </div>
        <div sx={{ height: 200 }}></div>
        <Footer />
    </>);

}