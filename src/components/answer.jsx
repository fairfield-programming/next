import React, { useState, useEffect } from 'react';
import cleanUser from '../generators/User';

/** @jsx jsx */
import { Card, Link, Flex, Input, Box, Avatar, Heading, Text, Grid, jsx } from 'theme-ui';

export default function Question({ data }) {

    let answer = data || { };
    let [ userData, setUserData ] = useState({ });

    let comments = data.comments || [];
    let points = data.points || 0;

    let commentsText = comments.length == 0 ? `No Comments` : `${comments.length} Comments`;
    let pointsText = points == 0 ? `No Points` : `${points} Points`;

    useEffect(() => {

        fetch('https://fairfield-programming.herokuapp.com/user/' + data.user).then((response) => {

            if (!response.ok)
                return null;

            return response.json();

        }).then((data) => {

            setUserData(cleanUser(data));

        })

    }, [ ])

    return (<>
    <Card variant="bordered" pb={3}>
        <Flex as="a" href={`/user/${answer.user}`} sx={{ mb: 2, textDecoration: 'none', color: 'inherit', width: '100%', height: '40px', alignItems: "center", justifyContent: "flex-end", flexDirection: 'row' }} alignItems={"center"} justifyContent={"center"}>
            <Text mx={2}>{userData.fullname}</Text>
            <Avatar size={30} src={userData.profilePicture || "https://placebear.com/300/300"}></Avatar>
        </Flex>
        <Text sx={{ textAlign: 'justify' }}>{ answer.body }</Text>
        <Grid mt={3} mb={0} gap={2} columns={[2, '1fr 1fr']}>
            <Link p={0} m={0} sx={{display: 'flex', textDecoration: 'none', justifyContent: 'center', alignItems: 'center', textAlign: "center", opacity: 0.5}}>
                
                <Link onclick={() => {}} sx={{ "&:hover": { fill: "#CD3232", cursor: 'pointer' }, fill: "#666" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21L4.20577 7.5L19.7942 7.5L12 21Z"/>
                    </svg>
                </Link>
                <Text mx={1}> { pointsText }</Text>
                <Link onclick={() => {}} sx={{ "&:hover": { fill: "#32CD32", cursor: 'pointer' }, fill: "#666" }}>
                    <svg width="24" height="24" viewBox=" 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        {/* <path d="M9.98242 15H8.61035V9.8291C8.10905 10.2979 7.51823 10.6445 6.83789 10.8691V9.62402C7.19596 9.50684 7.58496 9.28548 8.00488 8.95996C8.4248 8.63118 8.71289 8.2487 8.86914 7.8125H9.98242V15ZM13.4033 13.9697V12.1094H11.5283V10.8252H13.4033V8.96484H14.6533V10.8252H16.5332V12.1094H14.6533V13.9697H13.4033Z"/> */}
                        <path d="M12 3L19.7942 16.5H4.20577L12 3Z" />
                    </svg>
                </Link>
            </Link>
            <Link p={0} m={0} href={`#answer-${answer.id}-comments`} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none', textAlign: "center", opacity: 0.5}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#666">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 9C4 6.23858 6.23858 4 9 4H15C17.7614 4 20 6.23858 20 9V20H9C6.23858 20 4 17.7614 4 15V9ZM9.2832 14.1543L8.92676 10.5215V8.8418H10.4111V10.5215L10.0596 14.1543H9.2832ZM8.98535 14.6279V16H10.3574V14.6279H8.98535ZM13.2803 16V14.6279H14.6523V16H13.2803ZM13.2803 14.1543H14.5254C14.5189 13.7767 14.5498 13.5146 14.6182 13.3682C14.6898 13.2217 14.8704 13.028 15.1602 12.7871C15.7201 12.3216 16.0846 11.9538 16.2539 11.6836C16.4264 11.4134 16.5127 11.127 16.5127 10.8242C16.5127 10.2773 16.2799 9.79883 15.8145 9.38867C15.349 8.97526 14.7223 8.76855 13.9346 8.76855C13.1859 8.76855 12.5804 8.97201 12.1182 9.37891C11.6592 9.78581 11.4118 10.2806 11.376 10.8633L12.6357 11.0195C12.7236 10.6126 12.8848 10.3099 13.1191 10.1113C13.3535 9.91276 13.6449 9.81348 13.9932 9.81348C14.3545 9.81348 14.641 9.90951 14.8525 10.1016C15.0674 10.2904 15.1748 10.5182 15.1748 10.7852C15.1748 10.9772 15.1146 11.153 14.9941 11.3125C14.916 11.4134 14.6768 11.6266 14.2764 11.9521C13.876 12.2777 13.609 12.5706 13.4756 12.8311C13.3421 13.0915 13.2754 13.4235 13.2754 13.8271C13.2754 13.8662 13.277 13.9753 13.2803 14.1543Z"/>
                </svg>
                <Text mx={1}> { commentsText }</Text>
            </Link>
        </Grid>
    </Card>
    <Box>
        {/* <Card sx={{ maxWidth: "90%", mx: 'auto', my: 0, py: 3, px: 3 }} variant={'bordered'}>
            <Flex as="a" href={`/user/${answer.user}`} sx={{ mb: 0, textDecoration: 'none', color: 'inherit', width: '100%', alignItems: "center", justifyContent: "flex-end", flexDirection: 'row' }} alignItems={"center"} justifyContent={"center"}>
                <Text mx={2} fontSize={1}>{userData.fullname}</Text>
                <Avatar size={26} src={userData.profilePicture || "https://placebear.com/300/300"}></Avatar>
            </Flex>
            <Text sx={{ fontSize: 1, textAlign: 'justify', width: '100%', mb: 0, pb: 0 }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, modi explicabo? Optio dicta vero dolore? Ea, tempore! Corporis quod omnis ullam deserunt totam unde rem itaque, eveniet dolor nobis perspiciatis?</Text>
        </Card> */}
    </Box>
  </>);

}