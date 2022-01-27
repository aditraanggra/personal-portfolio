import { useContext } from 'react'
//components
import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'
// context
import Context from '../../context/Context'
// 3rd library
import { Divide as Hamburger } from 'hamburger-react'
import { Transition } from '@headlessui/react'

const { NavContext } = Context

const Navbar = () => {
  const props = useContext(NavContext)

  return (
    <>
      <div className='flex flex-1 justify-end'>
        <DesktopMenu />
        <div className='md:hidden z-50'>
          <Hamburger
            direction='right'
            size={32}
            duration={0.3}
            rounded
            easing='ease-in-out'
            toggled={props.isOpen}
            toggle={props.setOpen}
            color='#eee'
            label='show menu'
          />
        </div>
      </div>
      <Transition
        show={props.isOpen}
        enter='transition duration-500'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='transition duration-500'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
      >
        {(ref) => <MobileMenu ref={ref} />}
      </Transition>
    </>
  )
}

export default Navbar
