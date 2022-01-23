import { useState } from 'react'
//components
import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'
// 3rd library
import { Divide as Hamburger } from 'hamburger-react'
import { Transition } from '@headlessui/react'

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <div className='flex flex-1 justify-end'>
      <DesktopMenu />
      <div className='md:hidden z-50'>
        <Hamburger
          direction='right'
          size={32}
          duration={0.3}
          rounded
          easing='ease-in-out'
          toggled={isOpen}
          toggle={setOpen}
          color='#eee'
          label='show menu'
        />
      </div>
      <Transition
        show={isOpen}
        enter='transition-opacity duration-300'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='transition-opacity duration-300'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
      >
        <MobileMenu />
      </Transition>
    </div>
  )
}

export default Navbar
