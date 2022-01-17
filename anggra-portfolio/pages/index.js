import Layout from '../components/Layout'
import Hero from '../components/content/Hero'
import { IconContext } from 'react-icons'

export default function Home() {
  return (
    <IconContext.Provider
      value={{
        size: '1.5em',
        color: '#eeeeee',
      }}
    >
      <Layout>
        <Hero />
      </Layout>
    </IconContext.Provider>
  )
}
