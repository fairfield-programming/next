import React, { useState, useEffect } from 'react';
import cleanUser from '../generators/User';

/** @jsx jsx */
import { Card, Link, Flex, Input, Box, Avatar, Heading, Text, Grid, jsx } from 'theme-ui';

function renderWithData({ id, align, profilePicture, username, size }) {

    size |= 0;
    const sizes = [
        { avatar: 24, text: 1 },
        { avatar: 30, text: 2 },
        { avatar: 38, text: 3 }
    ];

    if (align == 'left') {

        return (
            <Flex as="a" href={`/user/${id}`} sx={{ "&:hover": { textDecoration: 'underline' }, mb: 2, textDecoration: 'none', color: 'inherit', width: '100%', height: '40px', alignItems: "center", justifyContent: "flex-start", flexDirection: 'row' }}>
                <Avatar size={sizes[size].avatar} src={profilePicture || "https://placebear.com/300/300"}></Avatar>
                <Text sx={{ fontSize: sizes[size].text }} mx={2}>{username || "John Doe"}</Text>
            </Flex>
        );

    } else {

        return (
            <Flex as="a" href={`/user/${id}`} sx={{ mb: 2, textDecoration: 'none', color: 'inherit', width: '100%', height: '40px', alignItems: "center", justifyContent: "flex-end", flexDirection: 'row' }}>
                <Text mx={2}>{username || "John Doe"}</Text>
                <Avatar size={30} src={profilePicture || "https://placebear.com/300/300"}></Avatar>
            </Flex>
        );

    }

}

export default function Responsibility({ userId, align, size }) {

    let [ userData, setUserData ] = useState({ });

    useEffect(() => {

        const { NODE_ENV } = process.env
        if (NODE_ENV !== 'production') return;
                
        fetch(`https://fairfield-programming.herokuapp.com/user/${userId}`).then((response) => {

            if (!response.ok) {
                throw new Error(`Response failed`)
            }

            return response.json();

        }).then((data) => {

            setUserData(cleanUser(data));

        })

    }, [ userId ])

    return renderWithData({ align, username: userData.username, profilePicture: userData.profilePicture, id: userId, size });

}