import { PropsWithChildren, useEffect, useState } from "react"
import { NavBar } from "../NavBar"
import Head from "next/head"
import { useRouter } from "next/router"
import LogRocket from 'logrocket';
import getConfig from 'next/config'
import ReactGA from 'react-ga';
import { Auth0Provider } from "@auth0/auth0-react";
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';

const { publicRuntimeConfig } = getConfig()
const { NODE_ENV, auth0 } = publicRuntimeConfig

import styles from "./styles.module.css"
import { SearchBar } from "../SearchBar";

const PageWithAuth = ({ children }) => {
  const [callbackUri, setCallbackUri] = useState(null)
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCallbackUri(window.origin)
    }
  }, [])

  return (
    callbackUri ? (
      <Auth0Provider
        domain={auth0.domain}
        clientId={auth0.clientId}
        redirectUri={callbackUri}
      >
        {children}
      </Auth0Provider>
    ) : (
        children
      )
  )
}

const PageHead = ({ title, description, pathname }) => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <meta property="og:image" content="http://protop.io/logo_with_blue_background_120x63_reduced_size.png" />
    <meta property="og:image:secure" content="https://protop.io/logo_with_blue_background_120x63_reduced_size.png" />
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
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
    />
  </Head>
)

type PageProps = PropsWithChildren<{
  beforeNavBar?: React.ReactNode
  title: string
  description: string
  includeSearchBar?: boolean
}>

export const Page = ({ title, description, children, beforeNavBar, includeSearchBar = false }: PageProps) => {
  const isProduction = NODE_ENV === "production"
  const { pathname } = useRouter()

  useEffect(() => {
    if (isProduction) {
      LogRocket.init("fgy1dh/protopio");
    }
    ReactGA.initialize("UA-171537767-1")
  }, [])

  useEffect(() => {
    ReactGA.pageview(pathname)
  })

  const graphQLClient = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
  });

  return (
    <ApolloProvider client={graphQLClient}>
      <PageWithAuth>
        <PageHead title={title} description={description} pathname={pathname} />
        {beforeNavBar}
        <NavBar />
        {includeSearchBar && <SearchBar />}
        {children}
        <footer className={styles.footer}>
          Copyright © 2019 - 2020
        </footer>
      </PageWithAuth>
    </ApolloProvider>
  )
} 
