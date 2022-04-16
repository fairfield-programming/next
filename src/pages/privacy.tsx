import React from "react";
import { Helmet } from "react-helmet"

import Header from "../components/header";
import Footer from "../components/footer";

export default function PrivacyPage() {

    return (
    <>
        <Helmet>
            <title>{ `Privacy Policy - The Fairfield Programming Association` }</title>
            <meta property="og:title" content="Privacy Policy - The Fairfield Programming Association" />
            <link rel="canonical" href="https://fairfieldprogramming.org/privacy" />
            <meta property="og:url" content="https://fairfieldprogramming.org/privacy" />
            <meta name="description" content="The Fairfield Programming Association is a open-source organization that runs programs and offers resources all to educate children in the area of computer science." />
            <meta property="og:description" content="The Fairfield Programming Association is a open-source organization that runs programs and offers resources all to educate children in the area of computer science." />
        </Helmet>
        <Header />
        <h1>This is the Privacy Policy Page.</h1>
        <Footer />
    </>);

}