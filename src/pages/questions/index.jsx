import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"

import Header from "../../components/header";
import Footer from "../../components/footer";

import Question from "../../components/question";

import Body from "../../theme/components/body"
import Masthead from "../../theme/components/masthead";
import Heading from "../../theme/components/heading";
import Bin, { BinLink } from "../../theme/components/bin";
import Sidebar from "../../theme/components/sidebar";
import Centerbox from "../../theme/components/centerbox";

/** @jsx jsx */
import { Link, Spinner, Divider, Grid, Card, Text, Button, Flex, NavLink, Box, jsx } from 'theme-ui';

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
            <Masthead>
                <Heading type="h1">Question and Answer</Heading>
            </Masthead>
            <Bin>
                <BinLink to="/questions" text="Recent" />
                <BinLink to="/questions/post" text="Ask-A-Question" />
                <BinLink to="/questions/answer" text="Answer-Questions" />
            </Bin>
            <Body padding="0px" width="1000px">
                <Flex>
                    <Box p={2} sx={{ width: '70%', listStyle: 'none', display: 'grid', gridGap: 3, gridTemplateColumns: '1fr', }}>
                        { (questions == null ? <Spinner /> : questions.map((post) => (
                            <Question data={post} />
                        ))) }
                        <Centerbox tall />
                    </Box>
                    <Sidebar side="left">
                        <Bin vertical>
                            <BinLink to={`./#recent`} text="🆕 Recent" />
                            <BinLink to={`./#trending`} text="📈 Trending" />
                            <BinLink to={`./#unanswered`} text="🤔 Unanswered" />
                        </Bin>
                        {/* <div style={{ padding: "0px 25px" }}>
                            <Heading type='h4'>Related</Heading>
                            <div sx={{ width: "100%", minHeight: 40, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                            {(related != null) ? related.slice(0, 5).map((item) => {

                                return (
                                <Link list href={"/question/" + item.id}>{ item.title }</Link>
                                );

                            }) : <Spinner size={20} /> }
                            </div>
                        </div> */}
                    </Sidebar>
                </Flex>
            </Body>
            <Footer />
        </>
    );

}