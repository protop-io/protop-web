import { Fragment } from "react"
import { NavBar } from "../NavBar"
import Head from "next/head"

import styles from "./styles.module.css"

export const Page = (props) => {
  return (
    <Fragment>
      <Head>
        <link 
          rel="icon" 
          href="/p_logo_with_width.png"
        />
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      {props.beforeNavBar}
      <NavBar />
      {props.children}
      <footer className={styles.footer}>
        Copyright © 2019 - 2020
      </footer>
    </Fragment>
  )
} 
