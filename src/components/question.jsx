import React from 'react';

import './question.css';

import Heading from '../theme/components/heading';
import Paragraph from '../theme/components/paragraph'; 

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

    let questionText = questionData.body || "This question doesn't have a description...";

    let questionLink = `/question/${questionData.id}`;

    return (<a href={questionLink} className='questionContainer'>
        <Heading type='h2'>{ questionData.title }</Heading>
        <Paragraph>{ questionText }</Paragraph>
        <div className='footer'>
            <p>{ commentsText }</p>
            <p>{ answersText }</p>
            <p>{ pointsText }</p>
        </div>
    </a>);

}