import type { NextPage } from 'next'
import Layout from '../components/template/Layout'

const Home: NextPage = () => {
  return (
    <Layout
     title='Página inicial'
     subtitle='Felipe é legal demais'
    >
      <h3>Felipe</h3>
    </Layout>
  )
}

export default Home
