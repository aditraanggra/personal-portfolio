import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'

const Layout = (props) => {
  const { children } = props
  return (
    <>
      <Head>
        <title>Anggra Aditra | UI Designer & Front End Developer</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta
          name='description'
          content='Personal UI Designer & Front End Developer Website'
        />
        <link rel='shortcut icon' href='/public/favicon.png' />
      </Head>
      <div className='flex flex-col h-full mx-4 sm:mx-10 md:mx-12 lg:mx-40'>
        <Header />
        <main className='flex-1 space-y-20 md:space-y-40'>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
