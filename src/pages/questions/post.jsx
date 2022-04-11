import React from "react"
import { Helmet } from "react-helmet"

import Header from "../../components/header";
import Footer from "../../components/footer";

/** @jsx jsx */
import { Label, Input, Textarea, Link, Divider, Grid, Card, Heading, Text, Button, Flex, NavLink, Box, jsx } from 'theme-ui';
import { WithContext as ReactTags } from 'react-tag-input';

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

export default function PostQuestionPage() {

    const [tags, setTags] = React.useState([]);

    const handleDelete = i => {
        setTags(tags.filter((tag, index) => index !== i));
    };

    const handleAddition = tag => {
        setTags([...tags, tag]);
    };

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
                <div sx={{
                    maxWidth: 600,
                    mx: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    height: 1000,
                    alignItems: 'center',
                    justifyContent: 'center',
                    space: 4
                }}>
                    <Heading sx={{
                        fontSize: 6,
                        my: 0
                    }} as='h1'>Ask a Question</Heading>
                    <Text sx={{
                        fontSize: 3,
                        fontWeight: '300',
                        my: 3
                    }}>The Fairfield Programming Association is a open-source organization that runs programs and offers resources all to educate children in the area of computer science.</Text>
                    
                    <Box as="form" onSubmit={(e) => e.preventDefault()} sx={{
                        width: 800,
                        m: 2,
                        p: 4,
                        borderColor: 'background02',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        borderRadius: 5
                    }}>

                        <Label htmlFor="title">Title</Label>
                        <Input name="title" id="title" mb={3} />

                        <Label htmlFor="description">Description</Label>
                        <Textarea name="description" id="description" mb={3} rows={8} />

                        <Label htmlFor="tags">Question Tags</Label>
                        <ReactTags
                            name="tags"
                            tags={tags}
                            suggestions={suggestions}
                            handleDelete={handleDelete}
                            handleAddition={handleAddition}
                            inline
                            inputFieldPosition="inline"
                            minQueryLength={1}
                            autocomplete
                            allowDragDrop={false}
                        />
                        <Button>Post the Question</Button>
                    </Box>
                </div>
            <Footer />
        </>
    );

}