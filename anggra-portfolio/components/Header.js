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

const Menuitems = ['ABOUT ME', 'PORTFOLIO', 'CONTACT']

const Header = () => {
  return (
    <header>
      <div className='flex flex-row justify-center items-center py-5'>
        <Image src={Logo} alt='logo' className='cursor-pointer' />
        <div className='flex-1'>
          <ul className='flex flex-row justify-end space-x-8'>
            {Menuitems.map((items, index) => (
              <li
                className='text-xs font-bold text-white hover:text-[#68D7FF] cursor-pointer'
                key={index}
              >
                {items}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
