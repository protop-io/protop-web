import { Fragment, PropsWithChildren, ReactNode, JSXElementConstructor, ReactElement } from "react"
import { NavBar } from "../NavBar"
import Head from "next/head"
import { useRouter } from "next/router"

import styles from "./styles.module.css"

type PageProps = PropsWithChildren<{
  beforeNavBar?: React.ReactNode
  title: string
  description: string
}>

export const Page = ({ title, description, children, beforeNavBar }: PageProps) => {
  const { pathname } = useRouter()
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:image" content="https://protop.io/logo_with_blue_background_120x63.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="protop logo" />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://protop.io${pathname}`} />

        <title>{title}</title>
        <link
          rel="icon"
          href="/favicon.ico"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      {beforeNavBar}
      <NavBar />
      {children}
      <footer className={styles.footer}>
        Copyright © 2019 - 2020
      </footer>
    </Fragment>
  )
} 
