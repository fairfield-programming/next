import React from "react";
import { Helmet } from "react-helmet"

import Header from "../components/header";
import Footer from "../components/footer";

export default function AboutPage() {

    return (
    <>
        <Helmet>
            <title>{ `About - The Fairfield Programming Association` }</title>
            <meta property="og:title" content="About - The Fairfield Programming Association" />
            <link rel="canonical" href="https://fairfieldprogramming.org/about" />
            <meta property="og:url" content="https://fairfieldprogramming.org/about" />
            <meta name="description" content="The Fairfield Programming Association is a open-source organization that runs programs and offers resources all to educate children in the area of computer science." />
            <meta property="og:description" content="The Fairfield Programming Association is a open-source organization that runs programs and offers resources all to educate children in the area of computer science." />
        </Helmet>
        <Header />
        <h1>This is the About Page.</h1>
        <Footer />
    </>);

}