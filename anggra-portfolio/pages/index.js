import Layout from '../components/Layout'
import { Hero, About, Work, GetInTouch } from '../components/content'
import { IconContext } from 'react-icons'
import Context from '../context/Context'

const IconStyles = {
  size: '1.5em',
  color: '#00CDAC',
}

const { NavProvider } = Context

export default function Home() {
  return (
    <NavProvider>
      <IconContext.Provider value={IconStyles}>
        <Layout>
          <Hero />
          <About />
          <Work />
          <GetInTouch />
        </Layout>
      </IconContext.Provider>
    </NavProvider>
  )
}
