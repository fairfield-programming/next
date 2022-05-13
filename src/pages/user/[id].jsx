import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet"
import { Router } from "@reach/router"

import Cookies from 'universal-cookie';

import Header from "../../components/header";
import Footer from "../../components/footer";

import GenerateUser from "../../generators/User";

import Question from '../../components/question';

/** @jsx jsx */
import { Spinner, jsx } from 'theme-ui';

import Masthead from '../../theme/components/masthead';
import Heading from '../../theme/components/heading';
import Bin, { BinLink } from '../../theme/components/bin';
import Avatar from '../../theme/components/avatar';
import Paragraph from '../../theme/components/paragraph';
import Together from '../../theme/components/together';
import Centerbox from '../../theme/components/centerbox';
import Body from "../../theme/components/body";

const cookies = new Cookies();

export function onRequestGet({ env, request }) {
    return env.ASSETS.fetch(
      new Request(
        new URL("/user/:id", request.url).toString(),
        request
      )
    );
}

export async function getServerData(context) {

    let urlParts = context.params['*'].split('/');
    let userId = urlParts[0] || '';
    let queryString = urlParts[1] || '';

    try {
        const res = await fetch(`https://fairfield-programming.herokuapp.com/user/${userId}`)

        if (!res.ok) {
            throw new Error(`Response failed`)
        }

        const userData = await res.json();

        return {
          props: { ...userData, id: userId, queryString }
        }

      } catch (error) {

        return {
          status: 500,
          headers: {},
          props: {}
        }

    }

}

function Default() {

    return <Centerbox tall>
        <Paragraph>General info about this user is not avalible.</Paragraph>
    </Centerbox>;

}

function Questions ({ userData }) {

    const [ questions, setQuestions ] = useState(null);
    useEffect(() => {

      fetch(`https://fpa-questions.herokuapp.com/user/${userData.id}/questions`, { 
          // mode: "no-cors" 
      }).then((response) => {

          if (response.status === 404) { window.location.href = "/"; }

          return response.json();

      }).then((data) => {

          setQuestions(data);

      })

    }, [ userData.id ])

    return <Body>
      <ul
        sx={{
          listStyle: 'none',
          display: 'grid',
          gridGap: 3,
          gridTemplateColumns: '1fr',
        }}>
        {(questions == null ? <Spinner /> : questions.map((post) => (
          <Question data={post} />
        )))}
      </ul>
    </Body>;

}

export default function UserPage({ serverData }) {

    let userData = GenerateUser(serverData);
    let isUser = userData.id == cookies.get("userId");

    return (<>
      <Helmet>
        <title>{ `${userData.firstname} ${userData.lastname} - The Fairfield Programming Association` }</title>
        <meta property="og:title" content={ `${userData.firstname} ${userData.lastname} - The Fairfield Programming Association` } />
        <link rel="canonical" href={`https://fairfieldprogramming.org/user/${userData.id}`} />
        <meta property="og:url" content={`https://fairfieldprogramming.org/user/${userData.id}`} />
        <meta name="description" content={userData} />
        <meta property="og:description" content={userData.biography} />
      </Helmet>
      <Header />
      <Masthead inline >
        <Avatar src={ userData.profilePicture } username={ userData.username } size="large" />
        <Together>
          <Heading type="h1">{ userData.fullname }</Heading>
          <Paragraph thinner>{ userData.biography }</Paragraph>
        </Together>
      </Masthead>
      <Bin>
        <BinLink to={`/user/${userData.id}`} text="General" />
        <BinLink to={`/user/${userData.id}/questions`} text="Questions" />
        <BinLink to={`/user/${userData.id}/articles`} text="Articles" />
      </Bin>
        {

            (serverData.queryString == 'questions') ? (<Questions userData={userData} />) : (<Default userData={userData} />)

        }   
      <Footer />
    </>);

}