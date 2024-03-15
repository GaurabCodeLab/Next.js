import React from "react";
import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";

const About = ()=>(
    <div>
        <Head>
            <title>About Page</title>
        </Head>
        <Layout>
        <h1>This is about page</h1>
        <Link href="/">Go to home page</Link>
        </Layout>
    </div>
);

export default About;