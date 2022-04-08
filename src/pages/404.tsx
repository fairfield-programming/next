import React from "react"

/** @jsx jsx */
import { Link, Heading, Flex, Text, jsx } from 'theme-ui';

export default function NotFound() {

  return (
    <Flex sx={{
      width: '100vw',
      height: '100vh',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    }}>
      <Heading as='h1'>Not Found</Heading>
      <Text sx={{
        mx: 'auto',
        maxWidth: 500,
        textAlign: 'justify',
        my: 4
      }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores iure ducimus vitae iste illum minus impedit dicta, molestiae maxime assumenda eaque sed blanditiis reiciendis ipsam quae cumque facilis expedita?</Text>
      <Link variant="links.primary" href="/">Head Back Home</Link>
    </Flex>
  );

}