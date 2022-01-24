import { useEffect } from 'react'
import NavItems from './NavItems'

const MobileMenu = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => (document.body.style.overflow = 'visible')
  }, [])

  return (
    <div
      className='flex md:hidden flex-col fixed justify-center items-center top-0 right-0 h-screen w-full
     space-y-8 bg-[#091b2bed] z-40'
    >
      <NavItems />
    </div>
  )
}

export default MobileMenu
