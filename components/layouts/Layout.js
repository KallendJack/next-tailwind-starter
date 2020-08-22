import Head from 'next/head'
import Header from '../Header'

const Layout = ({ user, loading = false, children }) => {
  return (
    <>
      <Head>
        <title>Next Tailwind Starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header user={user} loading={loading} />
      <main>{children}</main>
    </>
  )
}

export default Layout
