import { useAuth0 } from "@auth0/auth0-react";
import styles from "./styles.module.css"
import Link from "next/link";
import { useState, PropsWithChildren, Fragment, useContext } from "react";
import cx from "classnames"
import Icon from '@material-ui/core/Icon';
import Radio from '@material-ui/core/Radio';
import { RadioGroup, FormControlLabel } from "@material-ui/core";
import { AuthContext } from "../../Page/AuthContext";

type DropdownItemProps = PropsWithChildren<{
  title: string
  onClick?: () => void
  linkTo?: string
  icon: string
}>

const DropdownItem = ({ title, children, onClick, linkTo, icon }: DropdownItemProps) => {

  const Contents = () => <div className={styles.profileDropdownListItemContentInner}>
    <div className={styles.profileDropdownListItemTitle}>
      {title}
    </div>
    <div className={styles.profileDropdownListItemDescription}>
      {children}
    </div>
  </div>

  return (
    <li onClick={onClick} className={styles.profileDropdownListItem}>
      <div className={styles.profileDropdownListItemIconContainer}>
        <Icon className={styles.icon} fontSize={"large"}>{icon}</Icon>
      </div>
      <div className={styles.profileDropdownListItemContent}>
        {linkTo ? (
          <Link href={linkTo}>
            <a className={styles.profileDropdownLink}>
              <Contents />
            </a>
          </Link>
        ) : (
            <Contents />
          )}
      </div>
    </li>
  )
}

const Colors = () => {
  const [selected, setSelected] = useState("light")
  const handleChange = (e) => {
    setSelected(e.target.value)
  }

  const Option = ({ name }) => (
    <FormControlLabel
      value={name}
      control={<Radio color="primary" />}
      label={name}
      labelPlacement="top"
      className={styles.radioOptionLabel}
    />
  )

  return (
    <div>
      <RadioGroup row value={selected} onChange={handleChange}>
        <Option name="light" />
        <Option name="dark" />
        <Option name="seasonal" />
      </RadioGroup>
    </div>
  )
}

const Profile = () => {
  const { user, logoutCallbackUrl } = useContext(AuthContext)
  const [open, setOpen] = useState(false)
  const { logout } = useAuth0()

  return (
    <div>
      {open && <div onClick={() => setOpen(false)} className={styles.profileDropdownBackdrop} />}
      <div className={styles.profileButton} onClick={() => setOpen(!open)}>
        <img className={styles.profilePicture} src={user.picture} />
      </div>
      <div className={cx(styles.profileDropdown, {
        [styles.profileDropdownOpen]: open
      })}>
        <ul className={styles.profileDropdownList}>
          <DropdownItem title={user.username} linkTo={`/users/${user.username}`} icon={"account_circle"}>
            View profile and organizations
          </DropdownItem>

          <DropdownItem title={"Account"} linkTo={"/account"} icon={"settings"}>
            API credentials, notifications, privacy
          </DropdownItem>

          {/* <DropdownItem title={"Color mode"} icon={"palette"}>
            <Colors />
          </DropdownItem> */}

          <DropdownItem
            title={"Logout"}
            onClick={() => logout({ returnTo: logoutCallbackUrl })}
            icon={"exit_to_app"} />
        </ul>
      </div>
    </div>
  )
}

const Login = () => {
  const { loginWithRedirect } = useAuth0()
  return (
    <button
      onClick={() => loginWithRedirect()}
      className={styles.signInButton}
    >
      Login
    </button>
  )
}

export const Auth = () => {
  const { isLoading, user } = useContext(AuthContext)

  return <div className={styles.authContainer}>
    {isLoading ? <span>...</span> : user ? <Profile /> : <Login />}
  </div>
}
