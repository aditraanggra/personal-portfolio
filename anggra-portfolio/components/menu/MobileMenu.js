import { useEffect } from 'react'
import NavItems from './NavItems'

const MobileMenu = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden' //when mobile menu showed scroll functionality is disable

    return () => (document.body.style.overflow = 'visible') //when mobile menu disappear scroll functionality is active
  }, [])

  return (
    <div
      className='flex flex-col absolute md:hidden justify-center items-center right-0 top-0 h-screen w-full
     space-y-8 bg-[#091b2bed] z-40'
    >
      <NavItems />
    </div>
  )
}

export default MobileMenu
