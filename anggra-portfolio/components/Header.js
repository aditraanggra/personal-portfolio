/**
 * Add logo (svg) --Done
 * Make responsive Hamburger menu
 * Add Dark Mode Button
 * Using Array to render Menu Navigation --Done
 *
 *
 */
import Image from 'next/image'
import Logo from '../public/BrandLogo.svg'
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
