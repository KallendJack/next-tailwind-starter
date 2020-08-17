import Head from 'next/head'
import '../css/_main.scss'
import 'react-lazy-load-image-component/src/effects/blur.css'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
