import { Fragment, useContext } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import styles from "./styles.module.css"
import Link from "next/link"
import { AuthContext } from "../../Page/AuthContext"

const Login = () => {
  const { loginWithRedirect } = useAuth0()
  return (
    <li onClick={() => loginWithRedirect()}>
      <a>Login</a>
    </li>
  )
}

const AuthenticatedOptions = () => {
  const { logout } = useAuth0()
  const { user } = useContext(AuthContext)

  return (
    <Fragment>
      <li>
        <Link href={`/users/${user.username}`}>
          <a>Profile</a>
        </Link>
      </li>
      <li>
        <Link href="/account">
          <a>Account</a>
        </Link>
      </li>
      <li onClick={() => logout()}>
        <a>Logout</a>
      </li>
    </Fragment>
  )
}

const Loading = () => (
  <li>
    ...
  </li>
)

export const MobileAuth = () => {
  const { user, isLoading } = useContext(AuthContext)

  return (
    <Fragment>
      <div className={styles.hr} />
      {isLoading ? <Loading /> : !user ? <Login /> : <AuthenticatedOptions />}
    </Fragment>
  )
}
