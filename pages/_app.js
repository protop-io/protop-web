import "./global.css"
import { AuthContext } from "../components/Page/AuthContext"
import { useState, useEffect, useContext } from "react"
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import { ApolloProvider, ApolloClient, useQuery, InMemoryCache } from '@apollo/client';
import getConfig from 'next/config'
import { GET_USER_BY_NICKNAME } from "../queries/user";

const { publicRuntimeConfig } = getConfig()

const { auth0, bff } = publicRuntimeConfig

const getWindowOrigin = () => {
  if (typeof window !== "undefined") {
    return window.origin
  } else {
    throw new Error("Failed to discover window.origin")
  }
}

const ChildrenWithQueriedUserDetails = ({ children, setUser, nickname }) => {
  const { user } = useContext(AuthContext)

  if (!user) {
    // TODO This is still not being cached in state across pages...
    console.log('Querying user details', nickname)
    const { error, data } = useQuery(GET_USER_BY_NICKNAME, {
      variables: { nickname }
    })

    useEffect(() => {
      if (data && data.userByNickname && data.userByNickname[0]) {
        setUser(data.userByNickname[0])
      }
    }, [data])

    useEffect(() => {
      if (error) {
        console.error('User query failed', error)
      }
    }, [error])
  } else {
    // console.log('user exists')
  }

  return children
}

const ChildrenWithAuthContext = ({ children }) => {
  const { isLoading, user: auth0User, isAuthenticated } = useAuth0()
  const initialContext = useContext(AuthContext)
  const [context, setContext] = useState(initialContext)
  
  const setUser = (user) => {
    setContext({ ...context, user, isLoading: false })
  }

  useEffect(() => {
    setContext({ ...context, logoutCallbackUrl: getWindowOrigin() })
  }, [])

  useEffect(() => {
    if (!context.user && !isLoading && !isAuthenticated) {
      setContext({ ...context, isLoading: false })
    }
  }, [isLoading, isAuthenticated])

  return (
    <AuthContext.Provider value={context}>
      {(isLoading || !isAuthenticated) ? children : (
        <ChildrenWithQueriedUserDetails
          setUser={setUser}
          nickname={auth0User.nickname}>
          {children}
        </ChildrenWithQueriedUserDetails>
      )}
    </AuthContext.Provider>
  )
}

export default function ({ Component, pageProps }) {
  const [callbackUri, setCallbackUri] = useState(null)
  useEffect(() => {
    setCallbackUri(getWindowOrigin())
  }, [])

  const Children = () => (
    <ChildrenWithAuthContext>
      <Component {...pageProps} />
    </ChildrenWithAuthContext>
  )

  const graphQLClient = new ApolloClient({
    uri: bff.URL,
    cache: new InMemoryCache()
  });

  return (<ApolloProvider client={graphQLClient}>
    {callbackUri ? (
      <Auth0Provider
        domain={auth0.domain}
        clientId={auth0.clientId}
        redirectUri={callbackUri}
      >
        <Children />
      </Auth0Provider>
    ) : (
        <Children />
      )}
  </ApolloProvider>)
}
