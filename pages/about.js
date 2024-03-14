import React from "react";
import Link from "next/link";
import Head from "next/head";

const About = ()=>(
    <div>
        <Head>
            <title>About Page</title>
        </Head>
        <h1>This is about page</h1>
        <Link href="/">Go to home page</Link>
    </div>
);

export default About;