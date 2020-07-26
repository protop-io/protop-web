module.exports = {
  publicRuntimeConfig: {
    NODE_ENV: process.env.NODE_ENV,
    auth0: {
      domain: process.env.AUTH0_DOMAIN,
      clientId: process.env.AUTH0_CLIENTID
    }
  }
}
