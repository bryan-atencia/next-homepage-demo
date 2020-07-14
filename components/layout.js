import React from "react"
import { useEffect } from "react"
import Head from 'next/head'

export default ({ children }) => {

  useEffect(()=>{
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  },[])

  return <div style={{ maxWidth:"1180px", margin:"20px auto" }}>
          <Head>
            <title>HomePage Demo</title>
            <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
          </Head>
          { children }
          </div>
}
