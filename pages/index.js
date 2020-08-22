import Layout from '../components/layouts/Layout'
import { useFetchUser } from '../lib/user'

const Index = () => {
  const { user, loading } = useFetchUser()

  return (
    <>
      <Layout user={user} loading={loading}></Layout>
    </>
  )
}

export default Index
