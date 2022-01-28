import Image from 'next/image'
import Logo from '../public/Logo_48.svg'
import Navbar from './menu/Navbar'

const Header = () => {
  return (
    <header>
      <div className='flex flex-row justify-center items-center py-5'>
        <Image src={Logo} alt='logo' className='cursor-pointer' />
        <Navbar />
      </div>
    </header>
  )
}

export default Header
