import Link from "next/link"
import styles from "./styles.module.css"
import { Fragment, useState } from "react"
import cx from "classnames"
import { Auth } from "./Auth"
import { MobileAuth } from "./Auth/MobileAuth"

const MenuIcon = ({ onClick }) => (
  <div className={styles.menuIcon} onClick={onClick}>
    <div></div>
    <div></div>
    <div></div>
  </div>
)

const MobileNavigation = ({ setOpen, open }) => {
  return (
    <Fragment>
      <div className={cx(styles.mobileNavigationContainer, {
        [styles.mobileNavigationOpen]: open
      })}>
        <div className={styles.mobileNavigationDrawer}>
          <ul>
            <li><Link href="/#install"><a>Install</a></Link></li>
            <li><Link href="/about"><a>About</a></Link></li>
            <li><Link href="/docs/protop"><a>Docs</a></Link></li>
            <li><a
              rel="noopener"
              href="https://github.com/protop-io"
              target="_blank"
            >
              <img src="/github-mark.png" />
            </a></li>
            <MobileAuth />
          </ul>
        </div>
      </div>
    </Fragment>
  )
}

const MainNavigation = ({ toggleMobileNavigation }) => (
  <div className={styles.mainNavContainer}>
    <div className={styles.logoContainer}>
      <Link href="/">
        <a>
          <img src="/logo.png" alt="protop logo" className={styles.logo} />
        </a>
      </Link>
    </div>
    <div className={styles.linksContainer}>
      <ul>
        <li><a
          rel="noopener"
          href="https://github.com/protop-io"
          target="_blank"
        >
          <img src="/github-mark.png" />
        </a></li>
        <li><Link href="/#install"><a>Install</a></Link></li>
        <li><Link href="/about"><a>About</a></Link></li>
        <li><Link href="/docs/protop"><a>Docs</a></Link></li>
      </ul>
      <Auth />
    </div>

    <div className={styles.drawerButton}>
      <MenuIcon onClick={toggleMobileNavigation} />
    </div>
  </div>
)

export const NavBar = () => {
  const [mobileNavigationOpen, setMobileNavigationOpen] = useState(false)
  return (
    <nav className={styles.nav}>
      <MainNavigation toggleMobileNavigation={() => setMobileNavigationOpen(!mobileNavigationOpen)} />
      <MobileNavigation open={mobileNavigationOpen} setOpen={setMobileNavigationOpen} />
    </nav>
  )
}
