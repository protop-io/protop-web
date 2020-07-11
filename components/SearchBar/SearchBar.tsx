import styles from "./styles.module.css"
import { useState, Fragment } from "react"

/**
 * Sign up for updates.
 */
const SignUpForUpdates = ({ close }) => {
  const [fields, setFields] = useState({ name: "", email: "" })

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "subscribe", ...fields })
    })
      .then(close)
      .catch(error => {
        console.error(error)
        close()
      });

    e.preventDefault();
  }

  return (
    <div className={styles.signUpForUpdatesContainer}>
      <div className={styles.signUpForUpdatesContainerInner}>
        <h2>The protop registry is coming soon 🎉</h2>
        <p>
          We are aiming to bring the registry live by September 2020.
          Sign up for updates on the registry and other major features.
        </p>
        {/* @ts-ignore */}
        <form
          netlify-honeypot="bot-field"
          data-netlify="true"
          method="POST"
          name="subscribe"
          onSubmit={handleSubmit} className={styles.signUpForUpdatesForm}>
          <input type="hidden" name="form-name" value="subscribe" />
          <input
            className={styles.signUpForUpdatesFormInput}
            type="text" name="First Name" placeholder="Name"
            onChange={e => setFields({ ...fields, name: e.target.value })}
            value={fields.name} />
          <input
            className={styles.signUpForUpdatesFormInput}
            type="email" name="Email" placeholder="Email"
            onChange={e => setFields({ ...fields, email: e.target.value })}
            value={fields.email} />
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
        {focused && <SignUpForUpdates close={() => setFocused(false)} />}
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
