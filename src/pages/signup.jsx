import React, { useState } from "react";
import { Helmet } from "react-helmet"

import Cookies from 'universal-cookie';

/** @jsx jsx */
import { Text, Heading, Box, Message, Button, Input, Label, Link, Grid, Card, jsx, Checkbox, Flex } from 'theme-ui';

const cookies = new Cookies();

function formatUsername(text) {

    return text.toLowerCase().replace(/ /g, '-').replace(/\_/g, '-');

}

function formatEmail(text) {

    return text.toLowerCase().replace(/ /g, '-');

}

function handleSignupSubmit({ email, username, password, termsAndPrivacyChecked, setAlert }) {

    if (!termsAndPrivacyChecked) {

        setAlert("Please read and agree to the Terms of Service and Privacy Policy to create an account");
        return;

    }

    let bodyData = {
        username,
        password,
        email
    };

    fetch("https://fairfield-programming.herokuapp.com/user/signup", {
        method: 'POST',
        body: JSON.stringify(bodyData),
        headers: {
            'Content-Type': 'application/json'
        },
    }).then((response) => {

        if (!response.ok) {

            if (response.status == 403) {

                setAlert("An account with that username or email already exists");

            } else {

                setAlert("Hey, there seems to be an error on our side. Try reloading the page.");

            }

            return response.text();

        } else {

            return response.json();
            
        }

    }).then((data) => {

        if (typeof data != 'object') {
         
            if (data.toUpperCase().startsWith("USERNAME")) setAlert("Your username follows a bad format");
            if (data.toUpperCase().startsWith("PASSWORD")) setAlert("Your password doesn't follow good security standards");
            if (data.toUpperCase().startsWith("EMAIL")) setAlert("Your email isn't a correct email address");
            return;

        }

        let token = data.token;

        cookies.set("token", token);
        cookies.set("userId", data.id);

        if (typeof window != 'undefined')
            window.location.href = "/user/" + data.id;

    })

}

export default function SignupPage() {

    let [ termsAndPrivacyChecked, setTAPChecked ] = useState(false);

    let [ username, setUsername ] = useState("");
    let [ password, setPassword ] = useState("");
    let [ email, setEmail ] = useState("");

    let [ alert, setAlert ] = useState("");

    let alertText = (alert.length != 0) ? (<Message mt={3}><Text color={"primary"}>{alert}</Text></Message>) : (<></>);

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
            <Flex sx={{ width: "100%", height: "100%", alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }} as="form" onSubmit={(e) => {e.preventDefault(); handleSignupSubmit({ termsAndPrivacyChecked, email, username, password, setAlert })}}>
                <Box sx={{ p: 3, maxWidth: 450 }}>
                    <Box mt={4}>
                    </Box>
                    <Heading mb={4} as={"h1"} sx={{ fontSize: 6 }}>Sign Up</Heading>
                    <Box my={3}>
                        <Text>Username</Text>
                        <Input onChange={(val) => { val.target.value = formatUsername(val.target.value); setUsername(val.target.value) }}></Input>
                    </Box>
                    <Box my={3}>
                        <Text>Email</Text>
                        <Input onChange={(val) => { val.target.value = formatEmail(val.target.value); setEmail(val.target.value) }}></Input>
                    </Box>
                    <Box my={3}>
                        <Text>Password</Text>
                        <Input onChange={(val) => { setPassword(val.target.value) }}></Input>
                    </Box>
                    <Label mt={4} sx={{ width: "100%" }}>
                        <Checkbox checked={termsAndPrivacyChecked} onChange={() => { setTAPChecked(!termsAndPrivacyChecked); }} />
                        <Text sx={{maxWidth: 400}}>I've read and agree with <Link sx={{ color: 'inherit' }} href="/terms">Terms and Conditions</Link> and our <Link sx={{ color: 'inherit' }} href="/privacy">Privacy Policy</Link></Text>
                    </Label>
                    <Box mt={4}>
                        <Button mx={1} variant="primary">Create Account</Button>
                        <Button mx={1} as="a" href="/" variant="secondary">Go Home</Button>
                    </Box>
                    { alertText }
                    <Box mt={5}>
                        <Text>Already have an account? <Link href="/login">Log In</Link></Text>
                    </Box>
                </Box>
            </Flex>
            <Flex sx={{ width: "100%", height: "100%", alignItems: 'center', justifyContent: 'center', "@media screen and (max-width: 900px)": {
                display: 'none'
            } }}>
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" width="60%" viewBox="0 0 842.15586 619.6172">
                <path d="M719.88048,178.91541A38.55279,38.55279,0,0,1,709.57212,205.217c-.50372.5487-1.03445,1.0794-1.57413,1.59213a585.04325,585.04325,0,0,0-62.82144-42.17782c.26984-.68362.55769-1.35825.8725-2.02388a38.71737,38.71737,0,0,1,73.83143,16.308Z" transform="translate(-178.92207 -140.1914)" fill="#f2f2f2"/>
                <path d="M751.28219,257.71206l-.036.40479q-38.1975-2.63108-76.386-5.27109c-18.39489-1.26831-37.42841-2.70752-53.68248-11.41473-6.17065-3.30119-12.17928-7.70877-19.17746-8.01459-8.68025-.38679-16.25408,5.68488-22.2088,12.01738-35.19765,37.49138-45.38907,94.81688-84.87733,127.74779a1254.03174,1254.03174,0,0,1,88.92511-177.48144c6.3325-10.47923,13.8434-21.66908,25.59994-25.0872,11.21681-3.26521,22.69451,1.50217,33.02087,7.61881,2.21281,1.31328,4.37159,2.68953,6.45845,4.05676q23.8683,15.62437,46.9542,32.44512Q724.22057,235.36388,751.28219,257.71206Z" transform="translate(-178.92207 -140.1914)" fill="#f2f2f2"/>
                <path d="M833.64092,337.22837a603.25431,603.25431,0,0,0-94.22321-104.5855q-15.26019-13.41162-31.41972-25.8338a585.04317,585.04317,0,0,0-62.82144-42.17781q-10.74012-6.23356-21.732-11.97242c-5.69388-2.95936-11.75654-5.66688-18.32292-5.24412a24.37864,24.37864,0,0,0-12.656,4.86633c-8.06854,5.89177-13.4116,15.0937-17.8102,23.86388-3.84991,7.69078-7.43893,15.53447-11.09992,23.33318-1.55613,3.31918-3.11231,6.62935-4.72241,9.92154q-8.41944,17.29751-17.2345,34.40609-11.36073,22.04693-23.37814,43.76094-25.24465,45.64539-53.27772,89.64473-41.20641,64.66994-88.16952,125.418c-3.84088,4.95628-5.424,6.10762-9.31887,11.02795-.8995,1.15139-2.50062-.46776-1.61012-1.6101,32.48119-41.05345,60.76164-79.84012,89.27592-123.754q32.24732-49.66623,60.95048-101.53619,9.21537-16.63629,18.04408-33.47959,14.28868-27.26855,27.58782-55.04974,3.508-7.313,6.94416-14.67992c7.277-15.58844,17.87317-38.7687,38.33692-38.45387,6.01769.09,11.60364,2.52761,16.87473,5.22613,5.37,2.76149,10.64117,5.69387,15.90325,8.67123q3.1573,1.781,6.28754,3.616,12.39968,7.205,24.43054,15.01275,20.077,13.02031,39.09253,27.59682,9.02655,6.92172,17.78324,14.15821a605.857,605.857,0,0,1,98.127,102.82248q5.1676,6.86772,10.11944,13.88836C836.44742,337.28234,834.4775,338.41567,833.64092,337.22837Z" transform="translate(-178.92207 -140.1914)" fill="#e4e4e4"/>
                <path d="M741.44357,221.19419c1.189-1.32549,2.37065-2.651,3.56745-3.97646,9.43739-10.43731,19.5638-20.75335,32.52351-26.737a47.18532,47.18532,0,0,1,19.76876-4.58239,56.41679,56.41679,0,0,1,20.52584,4.47637c3.09035,1.2346,6.11262,2.63581,9.08905,4.12791,3.401,1.71176,6.74135,3.53719,10.06612,5.3777q9.362,5.18076,18.481,10.816,18.14424,11.21361,35.152,24.139,8.8167,6.70323,17.26942,13.84566,7.862,6.635,15.40584,13.626c1.07547.99221,2.68128-.6135,1.60581-1.60573-1.32548-1.2346-2.66612-2.46162-4.00676-3.67349q-5.68065-5.13531-11.54325-10.07373-10.69054-9.02085-21.93489-17.34491-17.48526-12.9519-36.17425-24.14656-9.33915-5.58977-18.93551-10.70993c-1.93165-1.03008-3.88587-2.03747-5.8626-2.99182a93.45644,93.45644,0,0,0-13.93646-5.67308,49.57831,49.57831,0,0,0-21.04872-2.06774,54.801,54.801,0,0,0-19.42035,6.71831c-12.72452,7.1122-22.59355,18.10991-32.19779,28.84258C738.868,220.67156,740.46644,222.28486,741.44357,221.19419Z" transform="translate(-178.92207 -140.1914)" fill="#e4e4e4"/>
                <path d="M480.72172,329.35191l-30.49128-11.15233-15.139-5.53717a154.815,154.815,0,0,0-14.94619-5.14764,23.57947,23.57947,0,0,0-13.52813.17236,31.17915,31.17915,0,0,0-10.55162,6.54091,85.62927,85.62927,0,0,0-8.65453,9.24241c-3.296,3.96111-6.5434,7.96373-9.80532,11.953q-20.1939,24.69642-40.12371,49.60725-19.92936,24.91042-39.59222,50.03247Q278.17879,460.2466,258.739,485.64072q-2.38142,3.11085-4.75875,6.22484c-.87564,1.14689-2.85.01619-1.962-1.14689q19.58324-25.64941,39.43947-51.08891,19.90506-25.50028,40.0852-50.78421,20.17974-25.2834,40.63222-50.34764,5.09534-6.24426,10.20747-12.47471c2.87483-3.50375,5.71724-7.04531,8.87051-10.30645,5.788-5.98608,13.0193-11.27622,21.67532-11.4197,5.08928-.08438,10.0146,1.53054,14.74307,3.24116,5.09749,1.84409,10.18277,3.72271,15.27375,5.58474l30.70449,11.23032,7.67613,2.80758c1.36222.49825.77376,2.695-.60405,2.19109Z" transform="translate(-178.92207 -140.1914)" fill="#e4e4e4"/>
                <path d="M781.54711,203.614c15.495-7.96363,35.33848-6.40389,49.57729,3.54547A707.12134,707.12134,0,0,0,750.67509,225.936C761.6494,219.50473,770.234,209.42846,781.54711,203.614Z" transform="translate(-178.92207 -140.1914)" fill="#f2f2f2"/>
                <path d="M831.277,207.13206l2.983,2.42464c-1.009-.84863-2.05793-1.6443-3.13548-2.39718C831.17535,207.1507,831.226,207.14084,831.277,207.13206Z" transform="translate(-178.92207 -140.1914)" fill="#f2f2f2"/>
                <path d="M397.21358,329.46333c3.00149-3.65358,6.24661-7.47912,10.73606-8.9631l4.19148.16531a475.43625,475.43625,0,0,1-126.63225,144.7704Q341.36124,397.44967,397.21358,329.46333Z" transform="translate(-178.92207 -140.1914)" fill="#f2f2f2"/>
                <path d="M753.42242,341.02221a32.21658,32.21658,0,0,1-40.61,20.63q-1.38-.45-2.7-1.02a32.2021,32.2021,0,0,1-17.93-39.58,31.87949,31.87949,0,0,1,3.22-6.94,32.20583,32.20583,0,0,1,58.02,26.91Z" transform="translate(-178.92207 -140.1914)" fill="#a0616a"/>
                <path d="M692.38714,322.66492c4.46454,2.1994,9.5203-.9883,13.4269-4.15839l-1.39795,1.18244c6.77766,6.73122,9.87982,16.34715,11.34677,25.79671,1.46863,9.43969,1.544,19.07874,3.419,28.45564,1.87654,9.367,5.872,18.80014,13.45662,24.60349,10.16087,7.773,24.28887,7.42608,36.87931,5.20487.16777-.03233.32405-.05647.49181-.0888a76.72188,76.72188,0,0,1-3.72807-30.45566A69.75863,69.75863,0,0,0,782.745,400.82534a160.13915,160.13915,0,0,0,24.40852-8.61075c5.10551-2.2866,10.60994-5.42848,12.07591-10.82912,1.46909-5.35961-1.75607-11.03038-6.11133-14.469-4.35526-3.4386-9.72523-5.26451-14.70175-7.73352-4.96843-2.45754-9.87429-5.939-11.82028-11.13875-4.48863-11.96153,8.788-25.49775,3.789-37.262-2.46527-5.78507-8.61655-8.98129-14.40359-11.45623a213.11662,213.11662,0,0,0-27.17569-9.47895c-8.13053-2.23438-16.6259-3.99316-24.94554-2.66886-8.3197,1.3243-16.50817,6.29207-19.57839,14.14863-5.00475,1.63429-10.31923,3.47967-13.56324,7.64483C687.47632,313.12688,687.66,320.33972,692.38714,322.66492Z" transform="translate(-178.92207 -140.1914)" fill="#2f2e41"/>
                <path d="M511.03286,568.68263c27.00173-3.64185,53.88739,6.152,81.07605,7.92135,27.05543,1.76074,54.42365-5.048,77.93045-18.51877,16.62047-9.52453,37.03189-8.10822,52.89851,2.62524q.59919.40533,1.21357.78156c13.10327,8.021,29.28573,8.56316,44.64606,8.876l151.58419,3.08541s36.35971,8.61781,41.60079,26.77806c5.2409,18.16026-6.37036,37.817-22.41866,47.80288-16.04829,9.98564-35.51665,12.4577-54.3238,14.343a1514.74814,1514.74814,0,0,1-363.23865-7.43144c-22.30786-3.16209-48.47408-9.90989-56.07774-31.11881C456.72847,598.17921,484.03113,572.32466,511.03286,568.68263Z" transform="translate(-178.92207 -140.1914)" fill="#ccc"/>
                <path d="M851.4878,604.65355,756.29059,593.2361a33.72311,33.72311,0,0,1,8.03159-66.96631l95.1972,11.41746a33.72311,33.72311,0,0,1-8.03158,66.9663Z" transform="translate(-178.92207 -140.1914)" fill="#2f2e41"/>
                <path d="M832.82351,365.24567l13.95282,13.534,17.83578,7.91166s-5.25982,108.60543.811,116.3309-.17269,7.16471.13866,16.29206,1.47721,27.90062,1.47721,27.90062c-49.51875,19.06316-89.73992,14.90992-118.52487-17.7992a8.08881,8.08881,0,0,1,5.46911-8.53947c6.38308-2.46453-3.36775-18.71,1.83468-20.60675s.88968-24.28076.88968-24.28076l9.91937-44.43362-2.71281-7.61831,14.00069-42.94559,15.80181-3.713,7.79474-13.8449Z" transform="translate(-178.92207 -140.1914)" fill="#6c63ff"/>
                <path d="M646.26688,467.44786a13.40639,13.40639,0,0,1,20.19937,3.81865l46.90345-8.35527L703.5762,485.649l-43.03887,4.44842a13.47905,13.47905,0,0,1-14.27041-22.6495Z" transform="translate(-178.92207 -140.1914)" fill="#ffb6b6"/>
                <path d="M676.76378,490.35231l85.96106-6.75773.17153-.32484c.1967-.372,11.95876-22.65286,22.39173-43.507,1.60666-3.2115,3.18179-6.38916,4.67832-9.44777q.96881-1.98006,1.88991-3.88676c4.14177-8.57573,7.44173-15.82548,8.7311-19.634a39.57043,39.57043,0,0,0-.06507-26.31906l-.08691-.20571-.19366-.112a20.08071,20.08071,0,0,0-24.812,3.89088,142.23662,142.23662,0,0,0-31.44816,57.16959l-3.34832,12.08346-61.5012,13.7753Z" transform="translate(-178.92207 -140.1914)" fill="#6c63ff"/>
                <polygon points="339.287 575.857 325.673 569.346 344.374 512.441 364.467 522.051 339.287 575.857" fill="#a0616a"/>
                <path d="M609.48031,706.87426c-.99.62012-1.98,1.23-2.98,1.84009-1.99,1.22-4,2.41992-6.01,3.59985-1.01.59009-2.03,1.18018-3.04,1.76026v.02978l-.06.01-.02.01-1.54.38013-2.21-5.84009-1.02-2.68994-1.44-3.81006-2.64-6.97-13.9-36.7,21.61-5.33008.81,3.31006h.01l.4,1.63989,7.55,30.62012,1.54,6.26.05.18994.93,3.74.8,3.24.88995,3.62012Z" transform="translate(-178.92207 -140.1914)" fill="#a0616a"/>
                <path d="M738.39245,577.99224c-1.37,2.2-2.77,4.39-4.18,6.56q-3.93009,6.06-8.07,11.94c0,.01-.01.01-.02.02a28.23387,28.23387,0,0,1-5.3,3.87c-.08.06-.17.1-.25.15a19.53944,19.53944,0,0,1-4.46,1.79c-.56.14-1.13.28-1.69.42-2.02.48-4.02.89-6.01,1.25-3.54.63-7.04,1.08-10.52,1.36-.28.03-.56.05-.84.07-14.31,1.05-28.24-.64-42.78-3.41-7.18005-1.36-14.51-2.99-22.1-4.68-2.48-.56-4.97-1.11-7.49-1.66-.19-.04-.39-.09-.59-.13-3.6-.79-7.26-1.57-11.01-2.34-4.72-.97-9.59-1.91-14.65-2.8l.36,7.13a53.66278,53.66278,0,0,0,3.38,16.03c2.16,6.32,3.87,11.32.26,21.73l-1.74,5.04a17.21289,17.21289,0,0,1-1.77,15.23l-.35.53,14.51,36.71.94,2.38H606.5924l-9.13995.01h-15.49l-22.35-44.84-1.07-2.14v-.11l2.31-86.17c.03-.76.09-1.53.19-2.29a26.19828,26.19828,0,0,1,9.97-17.64,25.22967,25.22967,0,0,1,18.79-5.14l7.65.99,15.63,2.02,11.01,1.43.22.03,32.47,4.2,2.33-9.5.43-.16,13.67-5.01,47.28-17.33.12-.04,3.11-1.14.37.6c.11005.18.22.36.32.54a92.6792,92.6792,0,0,1,7.47,17.34,272.2126,272.2126,0,0,1,7.85,29.97q.135.66.24,1.2l.03.11c.03.17.05.28.06.31C741.15246,566.96222,740.39245,572.50225,738.39245,577.99224Z" transform="translate(-178.92207 -140.1914)" fill="#2f2e41"/>
                <path d="M740.388,546.23608c-.15-.64-.34-1.29-.54-1.92a136.81363,136.81363,0,0,0-5.54-14.02c-2.36-5.2-5.19-10.77-8.56-16.8q-2.445-4.38008-5.26-9.11-1.41-2.37-2.93-4.83a2.5426,2.5426,0,0,0-.13-.22l-.29-.48-46.78,6.26-17.42,2.33-1.04,8.68-.25,2.15c-.01,0-.01,0,0,.01l-.7,5.86v.01l-.93,7.74-.08-.01-25.85-3.35-26.64-3.45-14.31-1.85a25.21443,25.21443,0,0,0-18.79,5.14,26.21145,26.21145,0,0,0-9.97,17.64c-.09.7-.15,1.42-.18005,2.13l-13.5,31.99a206.39592,206.39592,0,0,0-15.26,60.04l-9.9,31.65,1.41.13,20.98,1.95,5.54.52,12.2-17.81c1.39-2.03,2.71-4.12,3.94-6.26a95.07275,95.07275,0,0,0,5.39-10.84l26.39-62.8q3.06006.52515,6.06,1,13.87509,2.25,26.64,3.67c27.67,3.09,51.63,3.33,72.96.71q8.985-1.095,17.37-2.88,3.07508-.64507,6.07-1.39c.47-.11.93-.22,1.39-.34a25.51931,25.51931,0,0,0,17.85-16.68A26.0382,26.0382,0,0,0,740.388,546.23608Z" transform="translate(-178.92207 -140.1914)" fill="#2f2e41"/>
                <path d="M522.558,706.7561l-14.73-7.06-2.31-1.11-3.69,9.06-25.76,5.67a6.11225,6.11225,0,0,0-1,11.63l25.17,10.27,7.99-7.19-1.96,9.65,9.48,3.87,10.39-33.07Z" transform="translate(-178.92207 -140.1914)" fill="#2f2e41"/>
                <polygon points="434.16 552.611 435.1 554.991 434.16 554.991 434.16 552.611" fill="#2f2e41"/>
                <path d="M607.95237,695.69082,592.518,701.03846l-2.42244.83664,3.75277,9.03418-14.31489,22.15426a6.11225,6.11225,0,0,0,7.47253,8.96762l25.11139-10.41248.61846-10.731,5.39721,8.23619,9.45925-3.92038-15.88587-30.80934Z" transform="translate(-178.92207 -140.1914)" fill="#2f2e41"/>
                <path d="M546.97767,298.74509a10.96213,10.96213,0,0,0,13.84932,9.52583l22.1616,32.03755,7.55842-18.77938-22.20382-27.54432a11.02151,11.02151,0,0,0-21.36552,4.76032Z" transform="translate(-178.92207 -140.1914)" fill="#a0616a"/>
                <path d="M566.03125,316.41986,586.479,306.03021l43.70427,56.843,78.6869,23.33263a27.638,27.638,0,0,1,16.76,39.06h0a27.66743,27.66743,0,0,1-37.18028,12.05363l-82.34-42.02142Z" transform="translate(-178.92207 -140.1914)" fill="#3f3d56"/>
                <path d="M736.426,399.21964c-8.01044-4.11411-14.21655-11.21964-17-24l-13-1-43.0809,42.20685c-22.436,27.42872-6.1326,46.34432-5.15661,49.15724l-7.78777,35.90746,1.74547,12.01714.87173,3.56972,88.89622,46.45008L734.426,501.21964l7.057-54.06987C749.50189,422.1652,752.76024,419.75974,736.426,399.21964Z" transform="translate(-178.92207 -140.1914)" fill="#3f3d56"/>
                <path d="M665.88894,607.6634a10.96213,10.96213,0,0,0,2.73695-16.58476l19.5819-33.67626-20.21131,1.13916-15.4967,31.8049a11.02152,11.02152,0,0,0,13.38916,17.317Z" transform="translate(-178.92207 -140.1914)" fill="#a0616a"/>
                <path d="M673.79054,582.90454l-18.09475-14.09376L688.5761,505.0921l-12.32042-81.14337a27.638,27.638,0,0,1,28.23421-31.77118h0A27.66745,27.66745,0,0,1,731.202,420.71042l-3.04411,92.39271Z" transform="translate(-178.92207 -140.1914)" fill="#3f3d56"/>
                <polygon points="570.068 576.009 581.922 586.825 629.284 546.25 611.788 530.286 570.068 576.009" fill="#ffb6b6"/>
                <path d="M749.49835,709.57114l3.33658,3.04449,17.86009,6.5893,2.14826,11.66749.00094.00086a20.14081,20.14081,0,0,1,1.30144,28.45189l-.44115.48343-38.22227-34.87648Z" transform="translate(-178.92207 -140.1914)" fill="#2f2e41"/>
                <path d="M838.79135,589.96759l-10.23188-19.75641c.855-20.00483,18.2066-35.63434,38.13014-33.64017,11.09533,1.11054,21.27864,7.71686,24.896,26.36382,9.30184,47.94935-102.9237,142.85553-102.9237,142.85553l-19.49054-13.067-.4366-13.05719,11.42652-6.47147.42163-11.10627,10.83956-4.65777Z" transform="translate(-178.92207 -140.1914)" fill="#2f2e41"/>
                <circle cx="808.63167" cy="327.43102" r="30.59062" transform="translate(226.40192 960.82812) rotate(-84.50888)" fill="#ffb6b6"/>
                <path d="M786.34436,298.88729c3.20449-7.04445,16.15611-10.89913,36.43267-9.659,20.27657,1.24009,23.11249,25.54828,23.11249,25.54828,12.43893,12.24091-18.27452,38.85887-19.52272,37.67382l1.136-5.44652c1.88152-9.02149,6.83513-15.7255,2.31857-25.75015l-5.22-.44139-10.07249.951a2.87419,2.87419,0,0,1-1.9544-5.19049l.09822-.071-.19138-.36947c-3.63764,1.26344-7.37,2.40047-11.20042,2.25816-4.30925-.16-8.83-2.31578-10.52-6.28307a8.81762,8.81762,0,0,1-.66369-3.43427c-6.00029,1.75316-9.32743,8.62269-9.32743,8.62269S783.13988,305.93174,786.34436,298.88729Z" transform="translate(-178.92207 -140.1914)" fill="#2f2e41"/>
                <polygon points="654.339 573.009 640.945 581.847 600.482 534.389 620.251 521.346 654.339 573.009" fill="#ffb6b6"/>
                <path d="M845.24425,723.9301l-43.18856,28.49664-.36046-.54625a20.14079,20.14079,0,0,1,5.71765-27.90182l.00107-.00071,3.93954-11.19041,18.66852-3.7267,3.7701-2.48757Z" transform="translate(-178.92207 -140.1914)" fill="#2f2e41"/>
                <path d="M772.043,588.05107l12.66458-20.58992c2.27165-19.89381-12.4334-38.03548-32.42437-39.16924-11.13288-.63139-22.221,4.308-28.69894,22.1638-16.65761,45.915,79.4139,157.14459,79.4139,157.14459l21.28813-9.87138,2.46526-12.82978-10.27894-8.17245,1.3136-11.03636-9.98167-6.28945Z" transform="translate(-178.92207 -140.1914)" fill="#2f2e41"/>
                <path d="M819.48765,557.796a13.40637,13.40637,0,0,1,16.81263-11.82929l26.68511-39.46706,9.48738,22.86719-26.79511,33.97286a13.47905,13.47905,0,0,1-26.18993-5.54367Z" transform="translate(-178.92207 -140.1914)" fill="#ffb6b6"/>
                <path d="M857.16582,551.87737l55.0434-66.37165-.11351-.34937c-.12978-.40024-7.91789-24.36126-15.60857-46.37484-1.18434-3.39-2.36638-6.7339-3.51778-9.93841q-.7454-2.07453-1.47139-4.06371c-3.26606-8.946-6.16744-16.36422-8.00114-19.94265a39.57044,39.57044,0,0,0-18.92507-18.29039l-.20812-.081-.21528.06089a20.08071,20.08071,0,0,0-14.496,20.50956,142.23674,142.23674,0,0,0,19.09944,62.39038l6.33512,10.82071-32.96768,53.71488Z" transform="translate(-178.92207 -140.1914)" fill="#6c63ff"/>
                <ellipse cx="158.00394" cy="538.52823" rx="138.5" ry="43.30805" fill="#f2f2f2"/>
                <ellipse cx="158.00394" cy="538.52823" rx="111.55985" ry="34.88404" fill="#e6e6e6"/>
                <path d="M395.24774,653.99893c-6.48187-.87424-12.93589,1.4768-19.46263,1.90155a33.759,33.759,0,0,1-28.57144-13.05512c1.97573,3.11419.01958,7.5019-3.12591,9.42743s-7.03016,2.05562-10.71747,2.13071l-36.3884.74067.68706,3.13975c-3.01581-3.39008-9.41536-1.071-10.6735,3.28843s1.52923,9.07814,5.38169,11.47528c3.85246,2.39709,8.52591,2.99052,13.04065,3.44309a363.62178,363.62178,0,0,0,87.19692-1.784c5.35509-.75907,11.6364-2.37891,13.46169-7.4702C408.28373,661.0797,401.72962,654.87321,395.24774,653.99893Z" transform="translate(-178.92207 -140.1914)" fill="#3f3d56"/>
                <path d="M419.25163,655.02746c-1.422-6.38411-5.86052-11.62636-8.51683-17.60322a33.759,33.759,0,0,1,2.36544-31.32361c-2.23846,2.93105-7.032,2.6135-9.92674.3283s-4.36064-5.885-5.70664-9.31871l-13.28272-33.8856-2.70823,1.73078c2.13752-4.00234-2.25215-9.20456-6.77768-8.877s-7.98865,4.57521-8.90512,9.01906.14347,9.034,1.28062,13.42659a363.62133,363.62133,0,0,0,31.8377,81.19634c2.56469,4.76189,6.2574,10.09505,11.66578,10.04642C417.11754,669.70807,420.67359,661.4116,419.25163,655.02746Z" transform="translate(-178.92207 -140.1914)" fill="#3f3d56"/>
                <path d="M416.13707,556.46213c-3.46191-4.803-8.394-8.7381-14.22107-10.16956a18.66688,18.66688,0,0,0-16.12866,3.51813,22.71607,22.71607,0,0,0-3.42951,3.3739,102.2518,102.2518,0,0,1-7.11175,7.79041,133.00175,133.00175,0,0,0-13.70935-41.6,118.67236,118.67236,0,0,0-12.44934-18.97186c-3.91693-4.86914-8.16492-10.01947-14.352-11.93891a16.834,16.834,0,0,0-14.02924,1.9928,22.41339,22.41339,0,0,0-9.05133,12.57208,28.409,28.409,0,0,0-1.1062,9.02192c.13293,3.81414,1.15417,7.49072,1.791,11.235a102.52381,102.52381,0,0,1,1.1134,25.00324c-1.17389,15.29614-5.7854,30.61419-14.33484,43.4339q-.78324,1.17434-1.61322,2.31671a73.17283,73.17283,0,0,0-14.85162-24.4267q-1.718-1.86667-3.5716-3.60187a11.58506,11.58506,0,0,0-3.58209-2.61377c-5.11884-1.98193-8.79755,3.81958-8.28473,8.32532.37183,3.26721,2.51025,5.239,4.5235,7.63245a66.46227,66.46227,0,0,1,6.11352,8.593,60.778,60.778,0,0,1,7.72748,19.89808c1.45221,7.67852.77637,15.3551-.87585,22.94213-3.04108,13.96466-8.38251,28.8808-3.06238,43.02765,2.14545,5.70508,6.06879,10.63971,11.76587,13.07764a16.88464,16.88464,0,0,0,15.0827-.56024,14.89787,14.89787,0,0,0,1.68341-1.14429,7.77845,7.77845,0,0,0,.49366.80841c.62091.86579,1.60717.76392,2.57116.80109q1.54669.05968,3.09479.06573a90.13069,90.13069,0,0,0,11.92963-.75213,95.10893,95.10893,0,0,0,23.144-6.022,107.53327,107.53327,0,0,0,40.26446-28.6679,123.18572,123.18572,0,0,0,25.92347-47.29834,107.016,107.016,0,0,0,4.49389-28.04328A33.05018,33.05018,0,0,0,416.13707,556.46213Z" transform="translate(-178.92207 -140.1914)" fill="#fd6584"/>
                <path d="M273.85967,673.268c6.48188-.87424,12.93589,1.47681,19.46264,1.90156a33.759,33.759,0,0,0,28.57144-13.05513c-1.97574,3.11419-.01959,7.50191,3.1259,9.42744s7.03016,2.05562,10.71747,2.13071l36.38841.74066-.68707,3.13975c3.01581-3.39008,9.41536-1.071,10.6735,3.28843s-1.52923,9.07814-5.38169,11.47528-8.52591,2.99052-13.04065,3.44309a363.62126,363.62126,0,0,1-87.19692-1.784c-5.35509-.75907-11.6364-2.37891-13.46168-7.47019C260.82368,680.34874,267.37779,674.14225,273.85967,673.268Z" transform="translate(-178.92207 -140.1914)" fill="#3f3d56"/>
                <path d="M384.7705,679.02271c-2.25467-6.13966-7.34813-10.74816-10.77233-16.32075a33.497,33.497,0,0,1-4.81972-18.18261,12.4515,12.4515,0,0,0-6.46917-11.365q-.157-.08352-.30927-.17384c-3.17178-1.88187-5.10137-5.25593-6.8901-8.48119L337.858,592.67046s-5.90616-6.7513-10.34848-5.82747c-4.4423.92388-7.31264,5.59254-7.63272,10.11861s1.3382,8.93553,3.04686,13.13887a363.569,363.569,0,0,0,44.9475,79.86559,12.06083,12.06083,0,0,0,6.82016,4.61543C383.69807,696.71674,387.38742,686.149,384.7705,679.02271Z" transform="translate(-178.92207 -140.1914)" fill="#3f3d56"/>
                <path d="M259.88006,677.54048c2.25467-6.13967,7.34814-10.74817,10.77233-16.32075a33.497,33.497,0,0,0,4.81972-18.18261,12.4515,12.4515,0,0,1,6.46917-11.365q.157-.08352.30928-.17384c3.17177-1.88188,5.10136-5.25593,6.89009-8.4812l17.65187-31.82885,2.45526,2.07407c-1.58884-4.25009,3.45091-8.82537,7.89323-7.90154s7.31263,5.59254,7.63272,10.1186-1.33821,8.93553-3.04687,13.13888a363.56919,363.56919,0,0,1-44.9475,79.86559,12.06083,12.06083,0,0,1-6.82016,4.61543C260.9525,695.2345,257.26314,684.66675,259.88006,677.54048Z" transform="translate(-178.92207 -140.1914)" fill="#3f3d56"/>
                <path d="M287.56462,550.08652l.16559-.25043a7.72482,7.72482,0,0,0,6.52307-11.38318Z" transform="translate(-178.92207 -140.1914)" fill="#fd6584"/>
                <path d="M373.52165,502.5416a3.69776,3.69776,0,0,0-2.09253.30761c-1.44946.79187-1.56543,2.96619-.69055,4.36713a10.19584,10.19584,0,0,0,3.83435,3.05292,7.70822,7.70822,0,0,1,3.55164,3.3233c.64026,1.52252-.04016,3.6872-1.66522,3.98242l-1.19764,4.31354a9.86255,9.86255,0,0,0-1.74-19.34692Z" transform="translate(-178.92207 -140.1914)" fill="#fd6584"/>
                <path d="M407.06651,514.92111a27.689,27.689,0,0,1-.52319,18.19831,12.73152,12.73152,0,0,0,.52319-18.19831Z" transform="translate(-178.92207 -140.1914)" fill="#fd6584"/>
                <path d="M406.26665,533.87747c.1037-.24841.1806-.50671.27667-.75805a12.41742,12.41742,0,0,1-2.02985,1.56585Z" transform="translate(-178.92207 -140.1914)" fill="#fd6584"/>
                <path d="M537.30884,312.34285l13.17169-47.91818a6.42,6.42,0,0,1,7.88333-4.48385l10.44349,2.87069a6.42,6.42,0,0,1,4.48386,7.88333L560.11952,318.613a6.42,6.42,0,0,1-7.88333,4.48386l-10.44349-2.87069A6.42,6.42,0,0,1,537.30884,312.34285Z" transform="translate(-178.92207 -140.1914)" fill="#3f3d56"/>
                <path d="M558.91406,262.72072a3.45983,3.45983,0,0,0-4.24823,2.41629l-13.17168,47.91818a3.45982,3.45982,0,0,0,2.41629,4.24823l10.44349,2.87069a3.45982,3.45982,0,0,0,4.24823-2.41629l13.17168-47.91818a3.45982,3.45982,0,0,0-2.41629-4.24823Z" transform="translate(-178.92207 -140.1914)" fill="#6c63ff"/>
                <path d="M230.76554,524.23842a2.16814,2.16814,0,0,1-1.57133-3.75791l.14856-.59063-.059-.14178c-1.99607-4.75961-14.73307,8.50851-15.28374,12.98174a17.22466,17.22466,0,0,0,.30237,5.92393,69.05778,69.05778,0,0,1-6.28191-28.6819,66.65448,66.65448,0,0,1,.41344-7.43584q.34251-3.03607.95035-6.02892a69.85766,69.85766,0,0,1,13.85345-29.60753c3.94284.22006,7.39835-.38058,7.732-8.02207.05934-1.35929,1.06755-2.53624,1.2897-3.87527-.37641.04937-.759.08022-1.13541.10489-.11726.00614-.24067.01233-.35793.01852l-.04422.002a2.14813,2.14813,0,0,1-1.76422-3.49966q.2438-.3.48788-.59975c.24686-.30856.49986-.61093.74667-.91944a1.06964,1.06964,0,0,0,.08022-.0926c.2839-.35175.5677-.6973.8516-1.04905a6.21153,6.21153,0,0,0-2.03638-1.96843c-2.84475-1.66612-6.76939-.51219-8.82429,2.061-2.061,2.57318-2.44978,6.18317-1.734,9.39814a24.89307,24.89307,0,0,0,3.44335,7.67646c-.1543.19749-.31475.38878-.469.58627a70.30909,70.30909,0,0,0-7.33849,11.62592c.583-4.55366-6.54576-20.99855-9.30261-24.48182a5.99918,5.99918,0,0,0-10.68523,2.94582q-.00848.077-.01654.154.61422.34652,1.20251.73558a2.94092,2.94092,0,0,1-1.18572,5.35192l-.06.00926c-5.48122,7.82609,12.09017,28.19544,16.48842,23.6219a71.76441,71.76441,0,0,0-3.86295,18.1792,68.06556,68.06556,0,0,0,.04938,10.99022l-.01854-.12959c-.97723-7.963-17.74241-19.80238-22.63812-18.81619-2.82028.56811-5.59813.439-5.16987,3.2838l.02084.13623a19.758,19.758,0,0,1,2.2153,1.06752q.61424.34659,1.20251.73557a2.941,2.941,0,0,1-1.18572,5.352l-.06.00922c-.04318.00619-.08023.01237-.12337.01856-2.495,8.58477,16.00784,22.4395,27.25646,18.03109h.0062a71.74333,71.74333,0,0,0,4.81943,14.06946h17.21652c.06175-.1913.11727-.38879.17283-.58008a19.56083,19.56083,0,0,1-4.76392-.28381c1.27738-1.56742,2.55471-3.14717,3.83209-4.71454a1.06972,1.06972,0,0,0,.08023-.09256c.64792-.80218,1.302-1.59822,1.95-2.4004l.00035-.001a28.653,28.653,0,0,0-.83957-7.29912Zm-19.71523-38.78323.00907-.01223-.00907.02456Zm-3.81352,34.37759-.14811-.33317c.00619-.24067.00619-.48134,0-.72815,0-.06794-.01233-.13579-.01233-.20368.05551.42578.10488.8516.16658,1.27738Z" transform="translate(-178.92207 -140.1914)" fill="#f2f2f2"/>
                <path d="M969.23391,555.23876a28.653,28.653,0,0,0-.83957,7.29912l.00035.001c.64792.80218,1.302,1.59822,1.95,2.4004a1.06972,1.06972,0,0,0,.08023.09256c1.27738,1.56737,2.55471,3.14712,3.83209,4.71454a19.56083,19.56083,0,0,1-4.76392.28381c.05556.19129.11108.38878.17283.58008H986.8824a71.74333,71.74333,0,0,0,4.81943-14.06946h.0062c11.24862,4.40841,29.75145-9.44632,27.25646-18.03109-.04314-.00619-.08019-.01237-.12337-.01856l-.06-.00922a2.941,2.941,0,0,1-1.18572-5.352q.58779-.38871,1.20251-.73557a19.758,19.758,0,0,1,2.2153-1.06752l.02084-.13623c.42826-2.84485-2.34959-2.71569-5.16987-3.2838-4.89571-.98619-21.66089,10.8532-22.63812,18.81619l-.01854.12959a68.06556,68.06556,0,0,0,.04938-10.99022,71.76441,71.76441,0,0,0-3.863-18.1792c4.39825,4.57354,21.96964-15.79581,16.48842-23.6219l-.06-.00926a2.94092,2.94092,0,0,1-1.18572-5.35192q.58779-.38873,1.20251-.73558-.0081-.077-.01654-.154a5.99918,5.99918,0,0,0-10.68523-2.94582c-2.75685,3.48327-9.88556,19.92816-9.30261,24.48182a70.30909,70.30909,0,0,0-7.33849-11.62592c-.15425-.19749-.3147-.38878-.469-.58627a24.89307,24.89307,0,0,0,3.44335-7.67646c.71577-3.215.327-6.825-1.734-9.39814-2.0549-2.57323-5.97954-3.72716-8.82429-2.061a6.21153,6.21153,0,0,0-2.03638,1.96843c.2839.35175.5677.6973.8516,1.04905a1.06964,1.06964,0,0,0,.08022.0926c.24681.30851.49981.61088.74667.91944q.24417.29965.48788.59975a2.14813,2.14813,0,0,1-1.76422,3.49966l-.04422-.002c-.11726-.00619-.24067-.01238-.35793-.01852-.37641-.02467-.759-.05552-1.13541-.10489.22215,1.339,1.23036,2.516,1.2897,3.87527.33368,7.64149,3.78919,8.24213,7.732,8.02207a69.85766,69.85766,0,0,1,13.85345,29.60753q.611,2.9898.95035,6.02892a66.65448,66.65448,0,0,1,.41344,7.43584,69.05778,69.05778,0,0,1-6.28191,28.6819A17.22466,17.22466,0,0,0,986,563.72984c-.55067-4.47323-13.28767-17.74135-15.28374-12.98174l-.059.14178.14856.59063a2.16814,2.16814,0,0,1-1.57133,3.75791Zm19.71578-38.77124-.00907-.02456.00907.01223Zm3.80738,34.37764c.0617-.42578.11107-.8516.16658-1.27738,0,.06789-.01233.13574-.01233.20368-.00619.24681-.00619.48748,0,.72815l-.14811.33317Z" transform="translate(-178.92207 -140.1914)" fill="#f2f2f2"/>
            </svg>
            </Flex>
        </Flex>
    </>);

}