import Layout from '../components/layouts/Layout'
import { signIn, signOut, useSession } from 'next-auth/client'

const Index = () => {
  const [session, loading] = useSession()

  return (
    <>
      <Layout>
        {!session && (
          <>
            Not signed in <br />
            <button onClick={signIn}>Sign in</button>
          </>
        )}
        {session && (
          <>
            Signed in as {session.user.email} <br />
            <button onClick={signOut}>Sign out</button>
          </>
        )}
      </Layout>
    </>
  )
}

export default Index

export async function getStaticProps() {
  const getPageData = await fetch(`https://jsonplaceholder.typicode.com/todos/`)

  let pageData = await getPageData.json()

  return { props: { pageData } }
}
