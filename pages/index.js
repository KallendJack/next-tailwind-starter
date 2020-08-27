import Layout from '../components/layouts/Layout'

const Index = () => {
  return (
    <>
      <Layout></Layout>
    </>
  )
}

export default Index

export async function getStaticProps() {
  const getPageData = await fetch(`https://jsonplaceholder.typicode.com/todos/`)

  let pageData = await getPageData.json()

  return { props: { pageData } }
}
