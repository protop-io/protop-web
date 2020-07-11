import styles from "./styles.module.css"
import { useState, Fragment } from "react"

/**
 * Sign up for updates.
 */
const SignUpForUpdates = () => {

  return (
    <div className={styles.signUpForUpdatesContainer}>
      <div className={styles.signUpForUpdatesContainerInner}>
        <h2>The protop registry is coming soon 🎉</h2>
        <p>
          We are aiming to bring the registry live by September 2020.
          Sign up for updates on the registry and other major features.
        </p>
        {/* @ts-ignore */}
        <form netlify netlify-honeypot="bot-field"
          method="post"
          name="subscribe" 
          className={styles.signUpForUpdatesForm}>
          
          {/* For netlify: https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/ */}
          <input type="hidden" name="form-name" value="subscribe" />

          <input className={styles.signUpForUpdatesFormInput} type="text" name="First Name" placeholder="Name" />
          <input className={styles.signUpForUpdatesFormInput} type="email" name="Email" placeholder="Email" />
          <button className={styles.signUpForUpdatesFormButton} type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  )
}

const Search = () => {
  const [focused, setFocused] = useState(false)
  const [searchPhrase, setSearchPhrase] = useState("")

  return (
    <Fragment>
      {focused && <div className={styles.signUpForUpdatesBackdrop} onClick={() => setFocused(false)} />}
      <div className={styles.searchContainer} onClick={() => setFocused(true)}>
        <form className={styles.searchForm}>
          <input
            disabled
            className={styles.searchInput}
            type="search"
            placeholder="Search packages"
            autoComplete="off"
            aria-label="Search packages"
            onChange={e => setSearchPhrase(e.target.value)} value={searchPhrase} />
          <button
            onClick={(e) => {
              e.preventDefault()
              setFocused(true);
            }}
            className={styles.searchButton}
            type="submit">Search</button>
          <input type="hidden" name="csrftoken" value="TODO" />
        </form>
        {focused && <SignUpForUpdates />}
      </div>
    </Fragment>
  )
}

const Auth = () => (
  <div className={styles.authContainer}>
    <button className={styles.signInButton}>Login</button>
    <button className={styles.signUpButton}>Sign up</button>
  </div>
)

export const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <Search />
      {/* <Auth /> */}
    </div>
  )
}
