import { AppProps } from "next/app"
import { Fragment } from "react"
import GlobalStyle from "styles/global"
import Head from "next/head"
import { Header } from "components"

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Header />
      <GlobalStyle />
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
