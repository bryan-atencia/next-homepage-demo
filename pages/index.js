import React from "react"
import regeneratorRuntime from "regenerator-runtime";

import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout.js'

import { Grid, Typography, makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  texting: {
    color:"pink",
    background:"green"
  },
  image: {
    background:"grey",
    height:"250px",
    width:"250px",
    borderRadius:"50%",
    backgroundColor:"#ffe5b4"
  },
  actionText: {
    textTransform:"uppercase",
    textAlign:"center",
    borderBottom:"1px solid",
    width:"fit-content",
    margin:"10px auto",
    color:"black"
  },
  actionLink: {
    color:"black",
    textDecoration:"none"
  },
  mainGrid: {
    maxWidth:"775px",
    margin:"50px 0"
  }
}))

export default (props) => {

   const classes = useStyles(props)

    return <Layout>
              <Grid className={ classes.texting }>here</Grid>
            </Layout>

}

export async function getStaticProps() {
  return {
    props: {
      fallback: true,
      data: []
    }
  }
}
