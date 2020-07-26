import { Page } from "../../components/Page"
import { useRouter } from "next/router"

import styles from "./styles.module.css"

const Organization = ({ name }) => (
  <div className={styles.profile}>
    <div className={styles.profileTitle}>
      <h1 className={styles.h1}>{name}</h1>
    </div>

    <div className={styles.content}>
      <h2 className={styles.h2}>🎉 This organization might exist soon! 🎉</h2>

      <p>
        The registry is under construction, but you'll be able to create packages
        and organizations soon.
      </p>
    </div>
  </div>
)

export default () => {
  const router = useRouter()
  const { organization } = router.query

  return (
    <Page title={`protop | ${organization}`} description={`protop organization: ${organization}`} includeSearchBar={true}>
      <Organization name={organization} />
    </Page>
  )
}
