module.exports = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true
      },
      {
        source: '/login',
        destination: '/',
        permanent: true
      }
    ]
  }
}
