import { useRouter } from "next/router"
import { Page } from "../../components/Page"
import { useState, useEffect } from "react"
import { LoadingPage } from "../../components/LoadingPage"
import styles from "./styles.module.css"
import { useQuery } from "@apollo/client"
import { GET_USER } from "../../queries/user"
import Link from "next/link"
import moment from "moment"

const Organizations = ({ organizations }) => (
  <div className={styles.organizations}>
    <h2 className={styles.h2}>Organizations <span className={styles.count}>({organizations.length})</span></h2>
    {organizations.map(({ name }) => (
      <Link key={`organization-${name}`} href={`/organizations/${name}`}>
        <a>
          <div className={styles.organization}>
            {name}
          </div>
        </a>
      </Link>
    ))}
  </div>
)

const Packages = ({ packages }) => (
  <div className={styles.packages}>
    <h2 className={styles.h2}>Packages <span className={styles.count}>({packages.length})</span></h2>
    {packages.map(({ name }) => (
      <Link key={`package-${name}`} href={`/packages/${name}`}>
        <a>
          <div className={styles.package}>
            {name}
          </div>
        </a>
      </Link>
    ))}
  </div>
)

const Content = ({ user }) => (
  <div className={styles.content}>
    <Organizations organizations={user.organizations} />
    <Packages packages={user.packages} />
  </div>
)

const Profile = ({ nickname }) => {
  const [user, setUser] = useState(null)
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { nickname }
  })
  const { push } = useRouter()

  useEffect(() => {
    console.log('data', data)
    if (data) {
      if (data.user && data.user[0]) {
        setUser(data.user[0])
      } else {
        push('/404')
      }
    }
  }, [data])

  if (error) {
    console.error('err', error)
    return null
  }

  const toDate = (str) => {
    const m = moment(str, 'YYYY-MM-DD')
    return m.format('ll')
  }

  return (
    (loading || !user) ? (
      <LoadingPage />
    ) : (
        <div className={styles.profile}>
          <div className={styles.profileBackground} />
          <img src={user.picture} className={styles.profilePicture} />
          <h1 className={styles.profileName}>{user.nickname}</h1>
          <div className={styles.profileMeta}>
            Joined {toDate(user.joined)}
          </div>
          <Content user={user} />
        </div>
      )
  )
}

export default () => {
  const router = useRouter()
  const { username } = router.query

  return username ? (
    <Page title={`protop | ${username}`} description={`protop user: ${username}`} includeSearchBar={true}>
      <Profile nickname={username} />
    </Page>
  ) : <LoadingPage />
}
