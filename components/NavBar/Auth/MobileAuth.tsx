import { Fragment } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import styles from "./styles.module.css"
import Link from "next/link"

const Login = ({ login }) => (
  <li onClick={login}>
    <a>
      Login
    </a>
  </li>
)

const AuthenticatedOptions = ({ user, logout }) => (
  <Fragment>
    <li>
      <Link href={`/users/${user.nickname}`}>
        <a>
          Profile
        </a>
      </Link>
    </li>
    <li>
      <Link href="/account">
        <a>
          Account
        </a>
      </Link>
    </li>
    <li onClick={logout}>
      <a>Logout</a>
    </li>
  </Fragment>
)

const Loading = () => (
  <li>
    ...
  </li>
)

export const MobileAuth = () => {
  const { isLoading, isAuthenticated, user, logout, loginWithRedirect } = useAuth0()

  return (
    <Fragment>
      <div className={styles.hr} />
      {isLoading ? (
        <Loading />
      ) : (!isAuthenticated ? (
        <Login login={loginWithRedirect} />
      ) : (
          <AuthenticatedOptions user={user} logout={logout} />
        ))}
    </Fragment>
  )
}
