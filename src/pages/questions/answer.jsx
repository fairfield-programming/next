import React from "react"

/** @jsx jsx */
import { jsx, Spinner, Flex } from 'theme-ui';

export default function AnswerQuestionPage() {

    fetch('https://fpa-questions.herokuapp.com/question/unanswered').then((response) => {

        if (!response.ok) window.location.href = "/questions";

        return response.json();

    }).then((data) => {

        if (data.length == undefined || data.length == 0) window.location.href = "/questions";

        let random = Math.floor(Math.random() * data.length);

        let url = `/question/${data[random].id}`;
        window.location.href = url;

    });

    return ( <Flex sx={{
        position: 'fixed',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0, 
        alignItems: 'center',
        justifyContent: 'center'
    }}>
        <Spinner />
    </Flex> );
    
}