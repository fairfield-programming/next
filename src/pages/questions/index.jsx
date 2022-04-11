import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"

import Header from "../../components/header";
import Footer from "../../components/footer";

import Question from "../../components/question";

/** @jsx jsx */
import { Link, Spinner, Divider, Grid, Card, Heading, Text, Button, Flex, NavLink, Box, jsx } from 'theme-ui';

export default function QuestionsPage() {

    let [ questions, setQuestions ] = useState(null);
    let [ search, setSearch ] = useState('recent');

    useEffect(() => {

        let hash = window.location.hash.substring(1);
        if (hash == 'recent') setSearch('recent');
        if (hash == 'trending') setSearch('trending');
        if (hash == 'unanswered') setSearch('unanswered');

        fetch(`https://fpa-questions.herokuapp.com/question/${search}`).then(response => {

            if (!response.ok) window.location.href = "/questions";
    
            return response.json();
    
        }).then(data => {
    
            setQuestions(data);
    
        });

    }, [ search ]);

    return (
        <>
            <Helmet>
                <title>{ `Questions - The Fairfield Programming Association` }</title>
                <meta property="og:title" content={ `Questions - The Fairfield Programming Association` } />
                <link rel="canonical" href={`https://fairfieldprogramming.org/questions`} />
                <meta property="og:url" content={`https://fairfieldprogramming.org/questions`} />
                <meta property="description" content={"Ask any question you want, and someone will go out and answer it!"} />
                <meta property="og:description" content={"Ask any question you want, and someone will go out and answer it!"} />
            </Helmet>
            <Header />
            <div sx={{
                maxWidth: 600,
                mx: 'auto',
                display: 'flex',
                flexDirection: 'column',
                height: 600,
                alignItems: 'center',
                justifyContent: 'center',
                space: 4
            }}>
                <Heading sx={{
                    fontSize: 6,
                    my: 0
                }} as='h1'>Questions</Heading>
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
                    <Button as="a" href="/questions/answer" variant="buttons.primary">Answer a Question</Button>
                    <Button as="a" href="/questions/post" variant="buttons.secondary">Ask a Question</Button>
                </div>
            </div>
            <Flex sx={{
                maxWidth: 1000,
                mx: 'auto',
            }}>
                <Box p={2} sx={{ width: '300px' }}>
                    {/* <NavLink sx={{ width: '100%' }} onClick={() => { setSearch('trending') }} href="/questions/#trending" p={2}>
                        📈 Trending
                    </NavLink> */}
                    <NavLink sx={{ width: '100%' }} onClick={() => { setSearch('recent') }} href="/questions/#recent" p={2}>
                        🆕 Recent
                    </NavLink>
                    <NavLink sx={{ width: '100%' }} onClick={() => { setSearch('unanswered') }} href="/questions/#unanswered" p={2}>
                        🙋 Unanswered
                    </NavLink>
                </Box>
                <Box p={2} sx={{ width: '100%', display: 'block', minHeight: 50, alignItems: 'center', justifyContent: 'center' }}>
                    { (questions == null ? <Spinner /> : questions.map((post) => (
                        <Question data={post} />
                    ))) }
                </Box>
            </Flex>
            <Footer />
        </>
    );

}