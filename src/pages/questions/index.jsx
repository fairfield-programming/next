import React from "react"
import Header from "../../components/header";
import Footer from "../../components/footer";

/** @jsx jsx */
import { Link, Divider, Grid, Card, Heading, Text, Button, Flex, NavLink, Box, jsx } from 'theme-ui';

export default function QuestionsPage() {

    return (
        <>
            <Header />
            <div sx={{
                maxWidth: 600,
                mx: 'auto',
                display: 'flex',
                flexDirection: 'column',
                height: 700,
                alignItems: 'center',
                justifyContent: 'center',
                space: 4
            }}>
                <Heading sx={{
                    fontSize: 6,
                    my: 0
                }} as='h1'>Questions</Heading>
                <Text sx={{
                    fontSize: 3,
                    fontWeight: '300',
                    my: 3
                }}>The Fairfield Programming Association is a open-source organization that runs programs and offers resources all to educate children in the area of computer science.</Text>
                
                <div sx={{
                    display: 'grid',
                    gridGap: 1,
                    gridTemplateColumns: ['auto', '1fr 1fr'],
                }}>
                    <Button as="a" href="/signup" variant="buttons.primary">Answer a Question</Button>
                    <Button as="a" href="/login" variant="buttons.secondary">Ask a Question</Button>
                </div>
            </div>
            <Flex sx={{
                maxWidth: 1000,
                mx: 'auto',
            }}>
                <Box p={2} sx={{ width: '300px' }}>
                    <NavLink sx={{ width: '100%' }} href="#!" p={2}>
                        📈 Trending
                    </NavLink>
                    <NavLink sx={{ width: '100%' }} href="#!" p={2}>
                        🆕 New
                    </NavLink>
                    <NavLink sx={{ width: '100%' }} href="#!" p={2}>
                        🙋 Unanswered
                    </NavLink>
                </Box>
                <Box p={2} sx={{ width: '100%' }}>
                    <Card p={4} variant="cards.bordered">
                        <Heading>Lorem Ipusm</Heading>
                        <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur voluptas iusto fuga deserunt ut culpa reiciendis sunt maxime voluptates beatae! Inventore, expedita et similique consequatur atque reprehenderit? At, maxime laborum.</Text>
                        <Divider sx={{ color: 'background' }} />
                        <Grid gap={2} columns={[3, '1fr 1fr 1fr']}>
                            <Text sx={{textAlign: "center"}}>3 Comments</Text>
                            <Text sx={{textAlign: "center"}}>0 Answers</Text>
                            <Text sx={{textAlign: "center"}}>32 Points</Text>
                        </Grid>
                    </Card>
                    <Card p={4} variant="cards.bordered">
                        Centered container
                    </Card>
                    <Card p={4} variant="cards.bordered">
                        Centered container
                    </Card>
                </Box>
            </Flex>
            <Footer />
        </>
    );

}