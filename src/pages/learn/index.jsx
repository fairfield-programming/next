import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

/** @jsx jsx */
import { Box, Card, Heading, Image, Text, jsx } from "theme-ui";
import Footer from "../../components/footer";
import Header from "../../components/header";

import Article from "../../components/article";

export default function LearnPage() {

    let [ bestArticles, setBestArticles ] = useState([]);

    useEffect(() => {

        fetch(`https://fpa-learn.herokuapp.com/article`, { 
            
        }).then((response) => {

            return response.json();

        }).then((data) => {

            setBestArticles(data);

        })

    })

    return (
    <>
        <Helmet>
            <title>{ `Learn - The Fairfield Programming Association` }</title>
            <meta property="og:title" content="Learn - The Fairfield Programming Association" />
            <link rel="canonical" href="https://fairfieldprogramming.org/learn" />
            <meta property="og:url" content="https://fairfieldprogramming.org/learn" />
            <meta name="description" content="The Fairfield Programming Association is a open-source organization that runs programs and offers resources all to educate children in the area of computer science." />
            <meta property="og:description" content="The Fairfield Programming Association is a open-source organization that runs programs and offers resources all to educate children in the area of computer science." />
        </Helmet>
        <Header />
        <Box sx={{ width: "100%", marginTop: 60, height: "calc(100vh - 60px)", display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <Heading sx={{ fontSize: 6}}>Suggested Articles</Heading>
            <Text sx={{ maxWidth: 600, mt: 3, fontSize: 3, fontWeight: 300, mb: 3 }}>Below is a sampling of the best courses that we offer. They are hand curated and beautifly written to be simple to understand, information packed, and filled with love.</Text>
            <div sx={{ maxWidth: 1000, width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
                {
                    bestArticles.map(element => {

                        return <Article data={{
                            id: element.id,
                            title: element.title,
                            courseId: 1,
                            course: "Untitled Course",
                            username: element.username,
                            userId: element.userId,
                            thumbnail: element.thumbnail || "http://placekitten.com/400/400"
                        }}></Article>

                    })
                }
            </div>
        </Box>
        <Footer />
    </>);

}