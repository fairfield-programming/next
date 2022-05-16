import React, { useState } from "react"
import { Helmet } from "react-helmet"

import Cookies from 'universal-cookie';

import Header from "../../components/header";
import Footer from "../../components/footer";

import Body from "../../theme/components/body"
import Masthead from "../../theme/components/masthead";
import Heading from "../../theme/components/heading";
import Bin, { BinLink } from "../../theme/components/bin";
import Sidebar from "../../theme/components/sidebar";
import Centerbox from "../../theme/components/centerbox";
import Label from "../../theme/components/label";
import Link from "../../theme/components/link";
import Paragraph from "../../theme/components/paragraph";

/** @jsx jsx */
import { Input, Textarea, Divider, Grid, Card, Text, Button, Flex, NavLink, Box, jsx } from 'theme-ui';

const cookies = new Cookies();

const suggestions = [
    {
        id: 'general',
        text: 'General'
    },
    {
        id: 'ai',
        text: 'AI'
    }
];

function submitForm(questionTitle, questionDescription) {

    let body = {
        title: questionTitle,
        body: questionDescription
    }

    fetch(`https://fpa-questions.herokuapp.com/question/post`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${cookies.get('token')}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(response => (response.ok) ? response.json() : response.text()).then(data => {

        if (typeof data == 'object') {

            // Success

        } else {

            // FAILED

        }

    })


}

export default function PostQuestionPage() {

    if (cookies.get('token') == undefined) 
        if (typeof window != 'undefined')
            window.location.href = "/questions";

    let [ questionTitle, setQuestionTitle ] = useState("");
    let [ questionDescription, setQuestionDescription ] = useState("");

    return (
        <>
            <Helmet>
                <title>{ `Answer a Question - The Fairfield Programming Association` }</title>
                <meta property="og:title" content={ `Answer a Question - The Fairfield Programming Association` } />
                <link rel="canonical" href={`https://fairfieldprogramming.org/questions/post`} />
                <meta property="og:url" content={`https://fairfieldprogramming.org/questions/post`} />
                <meta property="description" content={"Post a question that has been eating you up for a while and someone else will go and answer it."} />
                <meta property="og:description" content={"Post a question that has been eating you up for a while and someone else will go and answer it."} />
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
            <Body>
                <Box as="form" onSubmit={(e) => { submitForm(questionTitle, questionDescription); e.preventDefault()}}>

                    <Heading type="h2">What do you want answered?</Heading>
                    <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, explicabo mollitia. At, non aspernatur expedita quasi tenetur, recusandae magnam nesciunt numquam provident excepturi mollitia perferendis eaque rerum quae voluptate suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus incidunt vero neque corrupti, cum vel in dolore deleniti corporis tempore animi iusto, porro necessitatibus accusamus tempora odio deserunt dolor. Harum.</Paragraph>
                    
                    <Box sx={{ height: '40px' }} height="80px"></Box> 

                    <Label htmlFor="title">Question or Problem</Label>
                    <Input name="title" value={questionTitle} onChange={(e) => { setQuestionTitle(e.target.value) }} placeholder="What's fourteen plus two?" id="title" mb={3} />

                    <Label htmlFor="description">Description of the Question/Problem</Label>
                    <Textarea name="description" value={questionDescription} onChange={(e) => { setQuestionDescription(e.target.value) }} placeholder="I've been thinking about this for a fairly long time... I don't know what fourteen plus two is. If you know the answer, please let me know. Its been years and I still don't know the answer!!!" id="description" mb={3} rows={8} />

                    <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Link href="/search">Search for it First</Link>
                        <Label mx={"10px"}>or</Label>
                        <Button>Post It!</Button>
                    </div>
                </Box>
                <Centerbox tall />
            </Body>
            <Footer />
        </>
    );

}