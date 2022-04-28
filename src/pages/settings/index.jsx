import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet"

import Cookies from 'universal-cookie';

import Header from "../../components/header";
import Footer from "../../components/footer";

import Question from "../../components/question";

/** @jsx jsx */
import { Avatar, Alert, Message, Flex, Button, Textarea, Label, Input, Close, Spinner, Card, Heading, Text, jsx } from 'theme-ui';

const cookies = new Cookies();

function capitalize(text) {

    if (text.length === 0) return "";
    if (text.length === 1) return text[0].toUpperCase();

    return text[0].toUpperCase() + text.slice(1).toLowerCase();

}

function cancelUpdate() {

    if (window !== undefined)
        window.location.href = "/user/" + cookies.get('userId')

}

function updateAccount({ username, description, profilePicture, setMessage, setWarning }) {

    let body = {
        username,
        biography: description,
        profilePicture
    }

    fetch(`https://fairfield-programming.herokuapp.com/user/${cookies.get('userId')}/update`, {
        method: 'post',
        headers: {
            'Authorization': `Bearer ${cookies.get('token')}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(response => (response.ok) ? response.json() : response.text()).then(data => {

        if (typeof data == 'object') {

            setMessage("Successfully Changed User Information!");
            setWarning("");

        } else {

            setWarning(data);
            setMessage("");

        }

    })

}

export default function UserPage({  }) {

    if (cookies.get("userId") === undefined) 
        if (typeof window !== 'undefined')
            window.location.href = "/";

    const [ username, setUsername ] = useState("");
    const [ displayName, setDisplayName ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ profilePicture, setProfilePicture ] = useState(""); 

    const [ warning, setWarning ] = useState("");
    const [ message, setMessage ] = useState("");

    useEffect(() => {

        if (warning == "" && message == "") return;

        setTimeout(() => {

            setWarning("");
            setMessage("");

        }, 5000)

    }, [ warning, message ])

    const [ userData, setUserData ] = useState({});
    useEffect(() => {

      fetch(`https://fairfield-programming.herokuapp.com/user/${cookies.get("userId")}`, { 
          // mode: "no-cors" 
      }).then((response) => {

        //   if (response.status === 404) { window.location.href = "/"; }

          return response.json();

      }).then((data) => {

        setUsername(data.username);
        setDisplayName(data.username.split('-').map(element => capitalize(element)).join(' '));
        setDescription(data.biography);
        setProfilePicture(data.profilePicture);

        setUserData((data));

      })

    }, [  ])

    return (<>
      <Helmet>
        <title>{ `Settings - The Fairfield Programming Association` }</title>
        <meta property="og:title" content={ `Settings - The Fairfield Programming Association` } />
        <link rel="canonical" href={`https://fairfieldprogramming.org/settings`} />
        <meta property="og:url" content={`https://fairfieldprogramming.org/settings`} />
        <meta name="description" content={"This is the settings page for your account with the Fairfield Programming Association."} />
        <meta property="og:description" content={"This is the settings page for your account with the Fairfield Programming Association."} />
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
            <Heading sx={{ mb: 4 }} as="h1">User Settings</Heading>

            { (message == "") ? (<></>) : (<Alert mb="3"> { message } <Close ml="auto" onClick={() => { setMessage(""); setWarning(""); }} /></Alert>) }
            { (warning == "") ? (<></>) : (<Alert mb="3" variant=""> { warning } <Close ml="auto" onClick={() => { setMessage(""); setWarning(""); }} /></Alert>) }
            
            <Label mb={2}>Display Name</Label>
            <Input onChange={(data) => { setDisplayName(data.target.value); setUsername(data.target.value.toLowerCase().replace(/ /g, '-')) }} value={displayName} />
            <Text sx={{ fontStyle: 'italic', fontSize: 1, mt: 2 }}>This will set your username as '{ username }'.</Text>

            <Label mt={4} mb={2}>Biography</Label>
            <Textarea sx={{ resize: 'none' }} rows={8} onChange={(data) => { setDescription(data.target.value); }} value={description} />
            
            <Flex sx={{ width: '100%', mt: 4, justifyContent: 'flex-end' }}>
                <Button sx={{ mx: 1 }} variant="secondary" onClick={() => { cancelUpdate() }}>Cancel</Button>
                <Button sx={{ ml: 1 }} variant="primary" onClick={() => { updateAccount({ username, description, profilePicture, setMessage, setWarning }) }}>Update Account</Button>
            </Flex>
        </Card>
      </div>
      <Footer />
    </>);

}