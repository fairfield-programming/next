import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet"

import Header from "../../components/header";
import Footer from "../../components/footer";

import Question from "../../components/question";

import GenerateUser from "../../generators/User";

/** @jsx jsx */
import { Avatar, Link, Spinner, Card, Heading, Text, jsx } from 'theme-ui';

export function onRequestGet({ env, request }) {
    return env.ASSETS.fetch(
      new Request(
        new URL("/user/:id/", request.url).toString(),
        request
      )
    );
}

export async function getServerData(context) {

    let userId = context.params['*'];

    try {
        const res = await fetch(`https://fairfield-programming.herokuapp.com/user/${userId}`)

        if (!res.ok) {
            throw new Error(`Response failed`)
        }

        const userData = await res.json();

        return {
          props: { ...userData, id: userId }
        }

      } catch (error) {

        return {
          status: 500,
          headers: {},
          props: {}
        }

    }

}

export default function UserPage({ serverData }) {

    let userData = GenerateUser(serverData);

    console.log(userData);

    const [ questions, setQuestions ] = useState(null);
    useEffect(() => {

      console.log(`https://fpa-questions.herokuapp.com/user/${userData.id}/questions`);

        fetch(`https://fpa-questions.herokuapp.com/user/${userData.id}/questions`, { 
            // mode: "no-cors" 
        }).then((response) => {

            if (response.status === 404) { window.location.href = "/"; }

            return response.json();

        }).then((data) => {

            setQuestions(data);

        })

    }, [ userData.id ])

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
      <div sx={{
        maxWidth: 800,
        mx: 'auto',
        my: 100
      }}>
        <Card variant="cards.bordered" sx={{
          width: '100%',
          // bg: 'background01',
          borderRadius: 5,
          p: 4
        }}>
        <div
          sx={{
            display: 'grid',
            gridGap: 2,
            gridTemplateColumns: `144px 1fr`,
          }}>
          <div sx={{ height: '100%', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'column' }}>
            <Avatar src={ userData.profilePicture } variant={"avatars.large"} />
          </div>
          <div sx={{ height: '100%', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'column' }}>
            <Heading my={2}>{ `${userData.firstname} ${userData.lastname}` }</Heading>
            <Text>{ userData.biography }</Text>
          </div>
        </div>

        </Card>
        <div sx={{
            m: 0,
            px: 3,
            py: 4,
        }}>
          <Heading as="h1">{ `${(questions || { length: 0 }).length} Questions` }</Heading>
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
        </div>
      </div>
      <Footer />
    </>);

}