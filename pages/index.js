import React from "react"
import regeneratorRuntime from "regenerator-runtime";

import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout.js'

import { Grid, Typography, makeStyles } from "@material-ui/core"

import { getHome } from "../functions"

import Header from "../components/home/Header.js"

const useStyles = makeStyles((theme) => ({
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
   const {
     data: {
       homebanner,
       trendbanners,
       videobanner,
       optionbanners,
       options,
       celebritybanners,
       mediabanners
     }
   } = props

   return <Layout>
              <Grid className={ classes.texting }>
                <Header data={ homebanner } classData={classes} />
              </Grid>
            </Layout>

}

export async function getStaticProps() {

  return {
    props: {
      fallback: true,
      data: await getHome()
    }
  }
}
