import React, { useState } from "react";
import { Helmet } from "react-helmet"

import Header from "../components/header";

/** @jsx jsx */
import { Text, Heading, Box, Button, Input, Label, Link, Grid, Card, jsx, Checkbox, Flex } from 'theme-ui';

function formatUsername(text) {

    return text.toLowerCase().replace(/ /g, '-').replace(/\_/g, '-');

}

function formatEmail(text) {

    return text.toLowerCase().replace(/ /g, '-');

}

export default function LoginPage() {

    let [ stayLogged, setStayLogged ] = useState(false);

    return (
        <>
        <Helmet>
            <title>{ `Sign Up - The Fairfield Programming Association` }</title>
            <meta property="og:title" content="Sign Up - The Fairfield Programming Association" />
            <link rel="canonical" href="https://fairfieldprogramming.org/signup" />
            <meta property="og:url" content="https://fairfieldprogramming.org/signup" />
            <meta name="description" content="To create an account with the Fairfield Programming Association, simply fill out the form on this page! It's as easy as Pi." />
            <meta property="og:description" content="To create an account with the Fairfield Programming Association, simply fill out the form on this page! It's as easy as Pi." />
        </Helmet>
        <Flex sx={{
            position: 'fixed',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            flexDirection: 'row'
        }}>
            <Flex sx={{ width: "100%", height: "100%", alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <Box sx={{ p: 3, maxWidth: 450 }}>
                    <Box mt={4}>
                    </Box>
                    <Heading mb={4} as={"h1"} sx={{ fontSize: 6 }}>Log In</Heading>
                    <Box my={3}>
                        <Text>Username</Text>
                        <Input onChange={(val) => { val.target.value = formatUsername(val.target.value) }}></Input>
                    </Box>
                    <Box my={3}>
                        <Text>Password</Text>
                        <Input></Input>
                    </Box>
                    <Label mt={4} sx={{ width: "100%" }}>
                        <Checkbox checked={stayLogged} onChange={() => { setStayLogged(!stayLogged); }} />
                        <Text sx={{maxWidth: 400}}>I want to stay logged in to my account on this machine.</Text>
                    </Label>
                    <Box mt={4}>
                        <Button mx={1} variant="primary">Continue to Profile</Button>
                        <Button mx={1} as="a" href="/" variant="secondary">Go Home</Button>
                    </Box>
                    <Box mt={5}>
                        <Text>Want to make an account? <Link href="/signup">Sign Up</Link></Text>
                    </Box>
                </Box>
            </Flex>
            <Flex sx={{ width: "100%", height: "100%", alignItems: 'center', justifyContent: 'center', "@media screen and (max-width: 900px)": {
                display: 'none'
            } }}>
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" width="50%" viewBox="0 0 899.23822 634.83795">
                <path d="M262.54087,640.28709a81.05681,81.05681,0,0,1-52.68052-19.45347c-4.89744-4.19217-10.1157-11.48032-15.50942-21.66052a49.53623,49.53623,0,0,1-1.57108-42.76507,56.84211,56.84211,0,0,1-9.38678,7.69937l-1.71613,1.14183-.09915-2.05778c-.06506-1.33843-.098-2.67236-.098-3.9646,0-7.61572,5.76007-15.34359,3.10357-22.383-11.19647-29.66913-46.70887-59.1543,4.75943-105.0715,4.76113-4.24762-1.599-12.74018-1.599-19.16674,0-62.98182,68.43238-157.45982,114.24336-114.22108,26.74026,25.23883,82.45206,43.16815,108.46374,78.27408l.34447,1.04016-1.01509.41065a61.2229,61.2229,0,0,1-16.2668,4.32653,77.56881,77.56881,0,0,0,18.13813,1.51954l.94355-.033.22983.91707a114.74316,114.74316,0,0,1,3.40579,27.766l-.00422,1.01171a50.592,50.592,0,0,0,16.71266,37.72313,81.24433,81.24433,0,0,1,26.50587,59.95092c0,13.35194-9.0747,30.87859-16.6876,43.23065A24.44539,24.44539,0,0,1,424.812,566.01647a23.87308,23.87308,0,0,1-19.26673-6.22405,78.949,78.949,0,0,0,13.92257,19.71146l1.03875,1.0703-1.2897.75146a80.99761,80.99761,0,0,1-40.83178,11.02686l-.84018-.00226c-21.78164,0-42.45666,8.43844-56.7237,23.15219A81.67332,81.67332,0,0,1,262.54087,640.28709Z" transform="translate(-162.20689 -132.4272)" fill="#e6e6e6"/>
                <path d="M233.95607,767.26516a1.45772,1.45772,0,0,1-1.44142-1.25232c-.06193-.43516-6.12837-44.18711-.68-102.33528,5.03158-53.70122,21.19-131.04988,69.59439-194.5751a1.45784,1.45784,0,1,1,2.31909,1.7672c-47.98629,62.97664-64.01447,139.75776-69.01058,193.07982-5.41668,57.80982.60219,101.22057.66365,101.6524a1.459,1.459,0,0,1-1.44511,1.66328Z" transform="translate(-162.20689 -132.4272)" fill="#3f3d56"/>
                <path d="M278.15328,557.10042a1.45779,1.45779,0,0,1-.85822-2.637,200.92042,200.92042,0,0,1,44.35616-22.57972c24.47209-8.95938,61.68554-17.08167,99.99613-4.88875a1.45763,1.45763,0,1,1-.88407,2.778c-37.5257-11.94236-74.06459-3.95437-98.10958,4.84888a197.61954,197.61954,0,0,0-43.64458,22.20009A1.45206,1.45206,0,0,1,278.15328,557.10042Z" transform="translate(-162.20689 -132.4272)" fill="#3f3d56"/>
                <path d="M864.54087,640.28709a81.05681,81.05681,0,0,1-52.68052-19.45347c-4.89744-4.19217-10.1157-11.48032-15.50942-21.66052a49.53623,49.53623,0,0,1-1.57108-42.76507,56.84211,56.84211,0,0,1-9.38678,7.69937l-1.71613,1.14183-.09915-2.05778c-.06506-1.33843-.098-2.67236-.098-3.9646,0-7.61572,5.76007-15.34359,3.10357-22.383-11.19647-29.66913-46.70887-59.1543,4.75943-105.0715,4.76113-4.24762-1.599-12.74018-1.599-19.16674,0-62.98182,89.01481-171.94239,114.24333-114.22108,31.11316,71.185,84.7168,63.57089,108.46374,78.27408l.3445,1.04016-1.01509.41065a61.2229,61.2229,0,0,1-16.2668,4.32653,77.56881,77.56881,0,0,0,18.13813,1.51954l.94355-.033.22983.91707a114.74316,114.74316,0,0,1,3.40579,27.766l-.00422,1.01171a50.592,50.592,0,0,0,16.71266,37.72313,81.24433,81.24433,0,0,1,26.50587,59.95092c0,13.35194-9.0747,30.87859-16.6876,43.23065a24.44539,24.44539,0,0,1-17.94547,11.49441,23.87308,23.87308,0,0,1-19.26673-6.22405,78.949,78.949,0,0,0,13.92257,19.71146l1.03875,1.0703-1.2897.75146a80.99761,80.99761,0,0,1-40.83178,11.02686l-.84018-.00226c-21.78164,0-42.45666,8.43844-56.7237,23.15219A81.67332,81.67332,0,0,1,864.54087,640.28709Z" transform="translate(-162.20689 -132.4272)" fill="#e6e6e6"/>
                <path d="M835.95607,767.26516a1.45772,1.45772,0,0,1-1.44142-1.25232c-.06193-.43516-6.12837-44.18711-.68-102.33528,5.03158-53.70122,21.19-131.04988,69.59439-194.5751a1.45784,1.45784,0,1,1,2.31909,1.7672c-47.98629,62.97664-64.01447,139.75776-69.01058,193.07982-5.41668,57.80982.60219,101.22057.66365,101.6524a1.459,1.459,0,0,1-1.44511,1.66328Z" transform="translate(-162.20689 -132.4272)" fill="#3f3d56"/>
                <path d="M876.15328,560.10042a1.45779,1.45779,0,0,1-.85822-2.637,200.92042,200.92042,0,0,1,44.35616-22.57972c24.47209-8.95938,61.68554-17.08167,99.99613-4.88875a1.45763,1.45763,0,1,1-.88407,2.778c-37.5257-11.94236-74.06459-3.95437-98.10958,4.84888a197.61954,197.61954,0,0,0-43.64458,22.20009A1.45206,1.45206,0,0,1,876.15328,560.10042Z" transform="translate(-162.20689 -132.4272)" fill="#3f3d56"/>
                <path d="M809.43281,393.92477a1.4578,1.4578,0,0,1,2.56839-1.04589,200.92079,200.92079,0,0,1,25.7154,42.61491c10.69847,23.76333,21.47959,60.29523,12.07727,99.38443a1.45763,1.45763,0,1,1-2.83443-.68172c9.20894-38.2883-1.38966-74.15706-11.90165-97.50566a197.62,197.62,0,0,0-25.28551-41.93252A1.452,1.452,0,0,1,809.43281,393.92477Z" transform="translate(-162.20689 -132.4272)" fill="#3f3d56"/>
                <path d="M210.43281,384.92477a1.4578,1.4578,0,0,1,2.56839-1.04589,200.92079,200.92079,0,0,1,25.7154,42.61491c10.69847,23.76333,21.47959,60.29523,12.07727,99.38443a1.45763,1.45763,0,1,1-2.83443-.68172c9.20894-38.2883-1.38966-74.15706-11.90165-97.50566a197.62,197.62,0,0,0-25.28551-41.93252A1.452,1.452,0,0,1,210.43281,384.92477Z" transform="translate(-162.20689 -132.4272)" fill="#3f3d56"/>
                <path d="M612.80682,237.55452a15.66632,15.66632,0,0,0-25.18672,3.85184c-23.71877,16.5076-38.75633,38.62642-44.42962,66.79815l-42.07857-38.178a15.29692,15.29692,0,1,0-12.6402,12.75913c7.72456,13.11219,43.55463,71.09678,65.66873,57.82137,18.588-11.1586,51.59836-66.44554,61.29637-84.78156A15.668,15.668,0,0,0,612.80682,237.55452Z" transform="translate(-162.20689 -132.4272)" fill="#ffb6b6"/>
                <path d="M614.1523,262.87357c2.11309-5.72719,3.80612-12.04017,1.97385-17.86323-2.01515-6.404-8.20632-10.9895-14.8266-12.1049s-13.50053.88076-19.19261,4.44058c-5.692,3.55982-10.32124,8.58765-14.4339,13.89406l1.10144-1.7533q-8.03111,10.52166-16.06217,21.04331,20.38409,14.162,40.76819,28.3238A124.35762,124.35762,0,0,0,614.1523,262.87357Z" transform="translate(-162.20689 -132.4272)" fill="#6c63ff"/>
                <polygon points="393.337 613.616 373.873 613.615 364.613 538.535 393.341 538.536 393.337 613.616" fill="#ffb6b6"/>
                <path d="M556.22981,766.34879l-59.85684-.00226v-.757A23.29923,23.29923,0,0,1,519.67091,742.292h.00145l10.93361-8.29481,20.39972,8.29607,5.22511.00018Z" transform="translate(-162.20689 -132.4272)" fill="#2f2e41"/>
                <polygon points="678.864 337.19 687.034 354.856 622.78 394.782 610.72 368.707 678.864 337.19" fill="#ffb6b6"/>
                <path d="M859.21181,460.46932l25.12831,54.32687-.687.31781a23.29923,23.29923,0,0,1-30.92627-11.36387l-.0006-.00131L840.60747,497.308l-1.03514-21.99776-2.19355-4.74238Z" transform="translate(-162.20689 -132.4272)" fill="#2f2e41"/>
                <ellipse cx="408.7301" cy="165.09747" rx="7.55666" ry="5.25681" transform="translate(-192.41569 -7.95132) rotate(-16.70778)" fill="#e6e6e6"/>
                <ellipse cx="458.07378" cy="162.63551" rx="7.55666" ry="5.2568" transform="translate(-189.62478 6.13058) rotate(-16.70778)" fill="#3f3d56"/>
                <ellipse cx="401.24654" cy="206.4494" rx="7.55666" ry="5.25681" transform="matrix(0.95778, -0.28749, 0.28749, 0.95778, -204.61991, -8.35704)" fill="#ff6584"/>
                <ellipse cx="386.45643" cy="224.05076" rx="3.3223" ry="4.77581" transform="translate(-192.11181 -70.21136) rotate(-8.86277)" fill="#e6e6e6"/>
                <ellipse cx="383.74124" cy="255.15643" rx="3.3223" ry="4.77581" transform="translate(-196.93663 -70.25829) rotate(-8.86277)" fill="#3f3d56"/>
                <ellipse cx="431.64204" cy="194.02217" rx="3.3223" ry="4.77581" transform="matrix(0.98806, -0.15407, 0.15407, 0.98806, -186.94585, -63.60822)" fill="#e6e6e6"/>
                <ellipse cx="406.39776" cy="185.76965" rx="3.3223" ry="4.77581" transform="translate(-185.97581 -67.5961) rotate(-8.86277)" fill="#ff6584"/>
                <ellipse cx="435.90324" cy="159.22991" rx="3.3223" ry="4.77581" transform="translate(-181.53459 -63.36712) rotate(-8.86277)" fill="#3f3d56"/>
                <ellipse cx="711.96281" cy="655.09321" rx="7.55666" ry="5.25681" transform="translate(-249.10936 -23.09257) rotate(-8.27826)" fill="#e6e6e6"/>
                <ellipse cx="662.79129" cy="650.29516" rx="7.55666" ry="5.2568" transform="translate(-248.93088 -30.22231) rotate(-8.27826)" fill="#3f3d56"/>
                <ellipse cx="725.42742" cy="615.28506" rx="7.55666" ry="5.25681" transform="translate(-243.23746 -21.56871) rotate(-8.27826)" fill="#ff6584"/>
                <ellipse cx="742.63798" cy="600.04197" rx="3.3223" ry="4.77581" transform="translate(-166.7229 -126.79457) rotate(-0.43325)" fill="#e6e6e6"/>
                <ellipse cx="749.8837" cy="569.67036" rx="3.3223" ry="4.77581" transform="translate(-166.49304 -126.74065) rotate(-0.43325)" fill="#3f3d56"/>
                <ellipse cx="693.53854" cy="623.12227" rx="3.3223" ry="4.77581" transform="translate(-166.89883 -127.16517) rotate(-0.43325)" fill="#e6e6e6"/>
                <ellipse cx="717.30035" cy="634.98626" rx="3.3223" ry="4.77581" transform="matrix(0.99997, -0.00756, 0.00756, 0.99997, -166.98786, -126.98516)" fill="#ff6584"/>
                <ellipse cx="684.22308" cy="656.91401" rx="3.3223" ry="4.77581" transform="translate(-167.15461 -127.23465) rotate(-0.43325)" fill="#3f3d56"/>
                <path d="M586.15667,406.68291,574.32681,421.17c.26886,3.92365-.96753,6.16556-4.64154,5.68415,0,0,.54833,7.18371-3.95307,4.841s-3.39758,4.16075-3.39758,4.16075L558.971,439.9751s-.10525,7.00572-3.42273,4.19156-4.3815,5.36568-4.3815,5.36568l-4.2215,5.16975L503.907,507.40773l24.12609,193.7144,28.19768-1.76963,6.87341-169.82508c1.753-4.68274,4.41407-7.1358,8.48224-6.1336,1.82215.399,2.88794-.69666,3.55854-2.57331l3.24169-2.34409,42.4331-30.68411,56.04956,96.05837L816.2308,510.3525l-13-25-97.76789,32.34572-2.56377-30.58651c-3.34064-1.94531-2.77924-4.27014-.56623-6.75567l-.63977-7.63214c3.31476-2.03406,1.67182-5.25831-.72619-8.66373-5.007-3.6973-4.51618-7.90866-1.03931-12.39926,0,0,4.39163-57.45177-16.89838-65.37931S586.15667,406.68291,586.15667,406.68291Z" transform="translate(-162.20689 -132.4272)" fill="#2f2e41"/>
                <path d="M627.95033,218.10133,601.2308,219.3525l-14,20,0,0a111.04718,111.04718,0,0,0-7.64141,68.49431l9.64142,46.50566-2.5545,34.4859c-6.84406,5.52139-7.41327,12.01257-1.4455,19.5141-7.34729,25.34985,55.17181,13.94088,113,5,.19983-12.078-2.93-24.37583-11-37l7.7809-100.75685L666.2308,241.3525l-22.02782-14.507Z" transform="translate(-162.20689 -132.4272)" fill="#6c63ff"/>
                <path d="M652.955,245.73662a15.66638,15.66638,0,0,0-2.06671,25.39563c3.22425,20.91583,23.24835,41.0647,54.73694,58.65021l-46.86081,32.12832a15.29692,15.29692,0,1,0,9.49641,15.24429c14.54126-4.48887,79.23116-25.965,71.41952-50.54646-6.566-20.66191-52.7389-65.54394-68.34078-79.213A15.668,15.668,0,0,0,652.955,245.73662Z" transform="translate(-162.20689 -132.4272)" fill="#ffb6b6"/>
                <path d="M601.9935,339.43209a12.3917,12.3917,0,0,1-12.332-11.42188l-1.65918-21.15527a12.3902,12.3902,0,0,1,11.38331-13.3208l41.09423-3.22266a12.39029,12.39029,0,0,1,13.32032,11.3833l1.65918,21.15528a12.39022,12.39022,0,0,1-11.3833,13.3208l-41.09424,3.22265Q602.48592,339.43233,601.9935,339.43209Z" transform="translate(-162.20689 -132.4272)" fill="#f2f2f2"/>
                <circle cx="445.70107" cy="45.61821" r="34.98425" fill="#ffb6b6"/>
                <path d="M644.25705,155.7809c-1.6579-2.152-3.55549-4.12848-4.999-6.42987-1.38971-2.21576-2.33874-4.70294-3.90558-6.79724-4.63391-6.19415-13.24981-7.46081-20.947-8.23224q-7.62358-.764-15.24725-1.52807a35.25348,35.25348,0,0,0-8.61981-.15564,17.892,17.892,0,0,0-13.00214,9.18762c-1.48919,2.81769-2.484,6.32941-5.38739,7.64361a34.81,34.81,0,0,1-4.17285,1.03742c-1.37183.42547-2.75061,1.52148-2.69946,2.95685.09479,2.65789,4.78448,4.17926,3.64026,6.58014-1.0105,2.12024-5.05658.61584-5.63068,3.81659a3.3635,3.3635,0,0,0,.6723,2.63562c1.30487,1.6715,3.44647,2.10589,5.45349,2.47473l-3.56463,5.0979a52.76474,52.76474,0,0,0,36.26471,1.40777,11.15481,11.15481,0,0,1,14.59875,11.78846l-.01629.14489a3.12681,3.12681,0,0,0,1.25512,2.95374c1.80921,1.22931,3.64643-.49542,4.46656-2.202.83428-1.7359,1.38812-3.84192,3.40686-4.45025a3.92391,3.92391,0,0,1,4.34533,1.82043c1.56977,2.46387.92523,5.40448.022,8.01209a43.26118,43.26118,0,0,1-9.93738,16.05255c7.60089-.50269,5.37689.25915,12.97772-.24353l2.11957.32989c5.08612-3.17309,7.60681-9.2102,8.94787-15.0531C647.3403,181.37532,652.55618,166.55342,644.25705,155.7809Z" transform="translate(-162.20689 -132.4272)" fill="#2f2e41"/>
                <path d="M673.91879,242.87276c-5.05176-3.42718-10.77307-6.58734-16.86578-6.20776-6.70057.41754-12.63923,5.32568-15.3125,11.48407s-2.38862,13.31671-.3006,19.69732,5.85638,12.08216,10.01928,17.34925l-1.43731-1.49042q8.284,10.32377,16.56793,20.64746,18.64453-16.38455,37.28894-32.76917A124.35773,124.35773,0,0,0,673.91879,242.87276Z" transform="translate(-162.20689 -132.4272)" fill="#6c63ff"/>
                <path d="M606.938,764.5093l.0152-.697a80.52866,80.52866,0,0,1,30.11215-60.64309,78.13219,78.13219,0,0,1,16.78623-10.11535l.572-.25475.09758.61814c1.16153,7.3802,3.0009,14.91288,3.85784,18.25612l5.74416-22.41411.63822-.18437a15.27245,15.27245,0,0,1,16.303,5.20878,15.53413,15.53413,0,0,1,1.61174,17.33178c-1.33892,2.49455-2.655,5.09732-3.9282,7.61425-4.37386,8.64929-8.89655,17.59309-15.48708,24.54163a48.67532,48.67532,0,0,1-39.25924,14.64528Z" transform="translate(-162.20689 -132.4272)" fill="#f2f2f2"/>
                <path d="M688.1058,766.53172l-271.75.30733a1.19068,1.19068,0,1,1,0-2.38136l271.75-.30734a1.19068,1.19068,0,1,1,0,2.38137Z" transform="translate(-162.20689 -132.4272)" fill="#cacaca"/>
                <path d="M942.1058,766.53172l-156.75.30733a1.19068,1.19068,0,1,1,0-2.38136l156.75-.30734a1.19068,1.19068,0,1,1,0,2.38137Z" transform="translate(-162.20689 -132.4272)" fill="#cacaca"/>
                <path d="M319.1058,766.53172l-146.75.30733a1.19068,1.19068,0,1,1,0-2.38136l146.75-.30734a1.19069,1.19069,0,1,1,0,2.38137Z" transform="translate(-162.20689 -132.4272)" fill="#cacaca"/>
                <path d="M478.05463,232.69564a4.17218,4.17218,0,0,0-4.15852,4.514c4.26152,20.08327,6.13577,39.23465,4.6924,57.091a4.19621,4.19621,0,0,0,4.15847,3.83056h26.91954a4.19623,4.19623,0,0,0,4.15849-3.83056c-2.17468-18.01111.12485-37.24186,4.69232-57.091a4.17209,4.17209,0,0,0-4.15847-4.514Z" transform="translate(-162.20689 -132.4272)" fill="#6c63ff"/>
                <path d="M520.67283,240.30489l-2.00836-9.5399a3.86387,3.86387,0,0,0-3.781-3.0679H502.34587a1.38437,1.38437,0,0,0-.23552-.45913l-1.39314-1.74143a1.40132,1.40132,0,0,0-1.09426-.52592h-7.74122a1.40134,1.40134,0,0,0-1.09427.52592l-1.39313,1.74143a1.38421,1.38421,0,0,0-.23553.45913H477.53005a3.86387,3.86387,0,0,0-3.781,3.0679l-2.00836,9.5399a3.86385,3.86385,0,0,0,3.78092,4.6599q19.69944,6.24231,41.37025,0A3.86385,3.86385,0,0,0,520.67283,240.30489Z" transform="translate(-162.20689 -132.4272)" fill="#3f3d56"/>
            </svg>
            </Flex>
        </Flex>
    </>);

}