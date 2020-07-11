import styles from "./styles.module.css"
import { useState, Fragment, useEffect } from "react"
import sweetalert from "sweetalert"
import ReactGA from "react-ga"
import cx from "classnames"

/**
 * Sign up for updates.
 */
const SignUpForUpdates = ({ close }) => {
  const [fields, setFields] = useState({ name: "", email: "" })
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (!fields.email || !fields.name) {
      setEnabled(false)
    } else {
      setEnabled(true)
    }
  }, [fields])

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const postGAEvent = () => ReactGA.event({
    category: "User",
    action: "Subscribed to updates"
  })

  const alertSuccess = () => sweetalert({
    title: "Subscribed",
    text: "You've successfully subscribed to updates from protop!",
    icon: "success",
    buttons: [true]
  })

  const handleSubmit = (e) => {
    const form = {
      "form-name": "subscribe",
      u: "3916fdd752e3bdbf3ff166053",
      id: "e5fec4d769",
      NAME: fields.name,
      EMAIL: fields.email
    }
    // via mailchimp
    fetch("https://protop.us19.list-manage.com/subscribe/post", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: encode(form)
    })
      .then(() => {
        postGAEvent()
        alertSuccess()
        close()
      })
      .catch(error => {
        console.error(error)
        close()
      });

    e.preventDefault();
  }

  const handleHoneypot = () => {
    close()
    sweetalert({
      title: "Oh no!",
      text: "We detected bot-like behavior. If you believe you encoutered this bug by mistake, please let us know.",
      icon: "error",
      buttons: {
        report: {
          text: "Report"
        }
      }
    }).then(button => {
      if (button === "report") {
        // TODO
      }
    })
  }

  return (
    <div className={cx(styles.signUpForUpdatesContainer, styles.elevatedWithShadow)}>
      <div className={styles.signUpForUpdatesContainerInner}>
        <h2>The protop registry is coming soon 🎉</h2>
        <p>
          We are aiming to bring the registry live by September 2020.
          Sign up for updates on the registry and other major features.
        </p>
        {/* @ts-ignore */}
        <form
          method="POST"
          name="subscribe"
          onSubmit={enabled ? handleSubmit : null}
          className={styles.signUpForUpdatesForm}>
          <input
            className={styles.signUpForUpdatesFormInput}
            type="text" name="name" placeholder="Name"
            onChange={e => setFields({ ...fields, name: e.target.value })}
            value={fields.name} />
          <input
            className={styles.signUpForUpdatesFormInput}
            type="email" name="email" placeholder="Email"
            onChange={e => setFields({ ...fields, email: e.target.value })}
            value={fields.email} />
          <button
            className={styles.signUpForUpdatesFormButton}
            disabled={!enabled}
            type="submit">
            Subscribe
          </button>

          {/* Honeypot */}
          <input
            className={styles.honeypot}
            autoComplete="off"
            onChange={handleHoneypot} />
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
      <div
        className={cx(styles.searchContainer, {
          [styles.elevatedWithShadow]: focused
        })}
        onClick={() => setFocused(true)}>
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
          {/* <input type="hidden" name="csrftoken" value="TODO" /> */}
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
    <Fragment>
      <div className={styles.searchBar}>
        <Search />
        {/* <Auth /> */}
      </div>
    </Fragment>
  )
}
