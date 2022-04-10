import React from 'react';

/** @jsx jsx */
import { Card, Heading, Text, Grid, jsx } from 'theme-ui';

export default function Question({ data }) {

    let questionData = data || {
        id: 0,
        title: "",
        body: "",
        answers: 0,
        comments: 0,
        points: 0
    };

    let commentsText = `${questionData.comments || 0} ${(questionData.comments || 0) == 1 ? 'Comment' : 'Comments' }`;
    let answersText = `${questionData.answers || 0} ${(questionData.answers || 0) == 1 ? 'Answer' : 'Answers' }`;
    let pointsText = `${questionData.points || 0} ${(questionData.points || 0) == 1 ? 'Point' : 'Points' }`;

    let questionLink = `/question/${questionData.id}`;

    return (<Card p={4} as="a" href={questionLink} sx={{ display: 'block', width: '100%', textDecoration: 'none', color: 'inherit' }} variant="cards.bordered">
        <Heading>{ questionData.title }</Heading>
        <Text>{ questionData.body }</Text>
        <Grid gap={2} columns={[3, '1fr 1fr 1fr']}>
            <Text sx={{textAlign: "center"}}>{ commentsText }</Text>
            <Text sx={{textAlign: "center"}}>{ answersText }</Text>
            <Text sx={{textAlign: "center"}}>{ pointsText }</Text>
        </Grid>
    </Card>);

}