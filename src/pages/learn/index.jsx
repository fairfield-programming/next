import React from "react";
import { Helmet } from "react-helmet";

/** @jsx jsx */
import { Box, Card, Heading, Image, Text, jsx } from "theme-ui";
import Footer from "../../components/footer";
import Header from "../../components/header";

export default function LearnPage() {

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
            <Heading sx={{ fontSize: 6}}>Learn</Heading>
            <Text sx={{ maxWidth: 600, mt: 3, fontSize: 3, fontWeight: 300, mb: 3 }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quis, quas debitis soluta harum eveniet a, itaque aliquam molestiae velit quia incidunt minima obcaecati ducimus dignissimos asperiores aspernatur ipsam quaerat.</Text>
            <div sx={{ maxWidth: 1000, width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
                <Card sx={{ p: 2, }}>
                    <Image src={"https://placebear.com/400/240"} sx={{ borderRadius: 4 }}></Image>
                    <Text sx={{ fontWeight: 600, width: '100%', display: 'block', mt: 2, mb: 0 }}>Learn how to code in just three days.</Text>
                    <Text sx={{ fontSize: 1, fontWeight: 400, color: 'text01' }}>Intro to Javascript • William McGonagle</Text>
                </Card>
                <Card sx={{ p: 2, }}>
                    <Image src={"https://placebear.com/400/240"} sx={{ borderRadius: 4 }}></Image>
                    <Text sx={{ fontWeight: 600, width: '100%', display: 'block', mt: 2, mb: 0 }}>Learn how to code in just three days.</Text>
                    <Text sx={{ fontSize: 1, fontWeight: 400, color: 'text01' }}>Intro to Javascript • William McGonagle</Text>
                </Card>
                <Card sx={{ p: 2, }}>
                    <Image src={"https://placebear.com/400/240"} sx={{ borderRadius: 4 }}></Image>
                    <Text sx={{ fontWeight: 600, width: '100%', display: 'block', mt: 2, mb: 0 }}>Learn how to code in just three days.</Text>
                    <Text sx={{ fontSize: 1, fontWeight: 400, color: 'text01' }}>Intro to Javascript • William McGonagle</Text>
                </Card>
            </div>
        </Box>
        <Footer />
    </>);

}