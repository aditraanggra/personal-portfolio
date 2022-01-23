import Layout from '../components/Layout'
import { Hero, About, Work, GetInTouch } from '../components/content'
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
        <About />
        <Work />
        <GetInTouch />
      </Layout>
    </IconContext.Provider>
  )
}
