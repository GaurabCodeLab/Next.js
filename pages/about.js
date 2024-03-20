import React from "react";
import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";
import Button from "../components/Button";

const About = ()=>(
    <div>
        <Head>
            <title>About Page</title>
        </Head>
        <Layout>
        <h1>This is about page</h1>
        <Link href="/">
            <Button>Go to home page</Button>
        </Link>
        </Layout>
    </div>
);

export default About;