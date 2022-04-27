import React, { useState, useEffect } from 'react';

/** @jsx jsx */
import { Card, Image, AspectRatio, Link, Flex, Input, Box, Avatar, Heading, Text, Grid, jsx } from 'theme-ui';

export default function Article({ data }) {

    return (
        <Card sx={{ p: 2, textDecoration: 'none', color: 'text' }} as="a" href={`/article/${data.id}`}>
            <AspectRatio ratio={16/10} sx={{ borderRadius: 4, overflow: 'hidden' }}>
                <Image src={data.thumbnail} alt={data.title} />
            </AspectRatio>
            <Text sx={{ fontWeight: 600, width: '100%', display: 'block', mt: 2, mb: 0}}>{data.title}</Text>
            <Text sx={{ fontSize: 1, fontWeight: 400, color: 'text01', textDecoration: 'none', "&:hover": { textDecoration: 'underline' }  }} as="a" href={`/course/${data.courseId}`}>{data.course}</Text>
            <Text sx={{ fontSize: 1, fontWeight: 400, color: 'text01'}}> • </Text>
            <Text sx={{ fontSize: 1, fontWeight: 400, color: 'text01', textDecoration: 'none', "&:hover": { textDecoration: 'underline' }  }} as="a" href={`/user/${data.userId}`}>{data.username}</Text>
        </Card>
    );

}