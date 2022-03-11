import { createGlobalStyle } from 'styled-components'
import Head from 'next/head'
import appConfig from '../config.json'

const GlobalStyle = createGlobalStyle`
* {
	box-sizing: border-box;
  margin: 0;
  padding: 0;
  text-decoration: none;
}
body {
	font-family: ${appConfig.typography.fontFamily};
  background: url(https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80) no-repeat center / cover ;

}
`

export default function CustomApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/zap.ico" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
