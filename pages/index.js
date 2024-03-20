import React from "react";
import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";
import Button from "../components/Button";

const Home = ()=>(
    <div>
        <Head>
            <title>Home Page</title>
        </Head>
        <Layout>
        <h1>This is home page</h1>
       <Link href="/about">
        <Button>Go to about page</Button>
       </Link>
       </Layout>
    </div>
);

export default Home;