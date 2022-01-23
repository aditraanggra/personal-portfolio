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
      <div className='flex flex-col h-full mx-4 sm:mx-10 md:mx-12 lg:mx-40'>
        <Header />
        <main className='flex-1'>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
