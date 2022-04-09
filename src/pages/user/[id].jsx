import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet"

import Header from "../../components/header";
import Footer from "../../components/footer";

import GenerateUser from "../../generators/User";

/** @jsx jsx */
import { Avatar, Link, Card, Heading, Text, jsx } from 'theme-ui';

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

    const [ questions, setQuestions ] = useState([]);
    useEffect(() => {

      console.log(`https://fpa-questions.herokuapp.com/user/${userData.id}/questions`);

        fetch(`https://fpa-questions.herokuapp.com/user/${userData.id}/questions`, { 
            // mode: "no-cors" 
        }).then((response) => {

            if (response.status === 404) { window.location.href = "/"; }

            return response.json();

        }).then((data) => {

            console.log(data);

            setQuestions(data);

        })

    }, [ userData.id ])

    return (<>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{ `${userData.firstname} ${userData.lastname} - The Fairfield Programming Association` }</title>
        <link rel="canonical" href={`http://fairfieldprogramming.org/user/${userData.id}`} />
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
          <Heading as="h1">{ `${questions.length} Questions` }</Heading>
          <ul
            sx={{
              listStyle: 'none',
              display: 'grid',
              gridGap: 3,
              gridTemplateColumns: 'repeat(auto-fit, minmax(256px, 1fr))',
            }}>
            {questions.map((post) => (
              <li key={post.id} sx={{}}>
                <Heading
                  sx={{
                    m: 0,
                  }}>
                  <Link
                    href={`/questions/${post.id}`}
                    sx={{
                      color: 'inherit',
                      fontWeight: 'body',
                      textDecoration: 'none',
                      ':hover,:focus': {
                        color: 'primary',
                        textDecoration: 'underline',
                      },
                    }}>
                    {post.body}
                  </Link>
                </Heading>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>);

}