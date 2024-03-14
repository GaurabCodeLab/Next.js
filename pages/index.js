import React from "react";
import Link from "next/link";
import Head from "next/head";

const Home = ()=>(
    <div>
        <Head>
            <title>Home Page</title>
        </Head>
        <h1>welcome to next js</h1>
        <h1>This is home page</h1>
       <Link href="/about">Go to about page</Link>
    </div>
);

export default Home;