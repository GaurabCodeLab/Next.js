import React from "react";

const Layout = ({children})=>{
    return (
        <div>
        <header>
            <h1>My website header</h1>
        </header>
        <main>{children}</main>
        <footer>
            <p>Gaurab &copy; All Rights Reserved</p>
        </footer>
    </div>
    )
}

export default Layout;