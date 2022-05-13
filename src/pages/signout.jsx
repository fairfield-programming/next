import React from "react"
import { Helmet } from "react-helmet"

import Cookies from 'universal-cookie';

/** @jsx jsx */
import { jsx, Spinner, Flex } from 'theme-ui';

const cookies = new Cookies();

export default function AnswerQuestionPage() {

    cookies.remove("userId", { path: '/' })
    cookies.remove("token", { path: '/' })
    cookies.remove("userData", { path: '/' })
    
    if (window !== undefined)
        window.location.href = "/";

    return ( <Flex sx={{
        position: 'fixed',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0, 
        alignItems: 'center',
        justifyContent: 'center'
    }}>
        <Helmet>
            <title>{ `Signout - The Fairfield Programming Association` }</title>
            <meta property="og:title" content={ `Signout - The Fairfield Programming Association` } />
            <link rel="canonical" href={`https://fairfieldprogramming.org/questions/answer`} />
            <meta property="og:url" content={`https://fairfieldprogramming.org/questions/answer`} />
            <meta property="description" content="Use this page to sign out of your account with the Fairfield Programming Association." />
            <meta property="og:description" content="Use this page to sign out of your account with the Fairfield Programming Association." />
        </Helmet>
        <Spinner />
    </Flex> );
    
}