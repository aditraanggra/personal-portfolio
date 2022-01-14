import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'

const Layout = (props) => {
  const { children } = props
  return (
    <>
      <Head>
        <title>Anggra Aditra | UI Designer & Front End Developer</title>
      </Head>
      <div className='flex flex-col h-full sm:mx-6 md:mx-40'>
        <Header />
        <main className='flex-1'>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
