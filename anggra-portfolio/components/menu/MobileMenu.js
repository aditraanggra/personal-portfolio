import NavItems from './NavItems'

const MobileMenu = () => {
  return (
    <div
      className='flex md:hidden flex-col fixed justify-center items-center top-0 right-0 h-screen w-full
     space-y-8 bg-[#091b2bed]'
    >
      <NavItems />
    </div>
  )
}

export default MobileMenu
