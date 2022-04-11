import React, { useState, useEffect } from 'react';
import cleanUser from '../generators/User';

/** @jsx jsx */
import { Card, Flex, Avatar, Heading, Text, Grid, jsx } from 'theme-ui';

export default function Question({ data }) {

    let answer = data || { };
    let [ userData, setUserData ] = useState({ });

    useEffect(() => {

        fetch('https://fairfield-programming.herokuapp.com/user/' + data.user).then((response) => {

            if (!response.ok)
                return null;

            return response.json();

        }).then((data) => {

            setUserData(cleanUser(data));

        })

    }, [ ])

    return (<Card variant="bordered">
    <Flex as="a" href={`/user/${answer.user}`} sx={{ textDecoration: 'none', color: 'inherit', width: '100%', height: '40px', alignItems: "center", justifyContent: "flex-end", flexDirection: 'row' }} alignItems={"center"} justifyContent={"center"}>
      <Text mx={2}>{userData.fullname}</Text>
      <Avatar size={30} src={userData.profilePicture || "https://placebear.com/300/300"}></Avatar>
    </Flex>
    <Text>{ answer.body }</Text>
  </Card>);

}