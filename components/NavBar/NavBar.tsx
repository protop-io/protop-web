import Link from "next/link"
import styles from "./styles.module.css"

export const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <a>
            <img src="/logo.png" alt="protop logo" className={styles.logo} />
          </a>
        </Link>
      </div>
      <div className={styles.linksContainer}>
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
        </ul>
      </div>
    </nav>
  )
}