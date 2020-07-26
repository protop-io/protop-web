import { Page } from "../../components/Page";
import { useAuth0 } from "@auth0/auth0-react";
import { Fragment, useState, useEffect } from "react";
import styles from "./styles.module.css"
import { LoadingPage } from "../../components/LoadingPage";

const NotAuthenticated = () => (
  <Fragment>
    <h2>You need an account to access this page</h2>

  </Fragment>
)

const Account = () => (
  <Fragment>
    <h1>Account</h1>
    <p>There will be more to do here soon. </p>
  </Fragment>
)

export default () => {
  const Content = () => {
    const { isLoading, isAuthenticated } = useAuth0()

    return isLoading ? <LoadingPage /> : (
      isAuthenticated ? <Account /> : <NotAuthenticated />
    )
  }

  return (
    <Page title="protop | Account" description="protop account details.">
      <div className={styles.content}>
        <div className={styles.contentInner}>
          <Content />
        </div>
      </div>
    </Page>
  )
}
