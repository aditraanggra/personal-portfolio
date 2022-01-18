import NavItems from './NavItems'

const DesktopMenu = () => {
  return (
    <ul className='hidden md:flex flex-row justify-end space-x-8'>
      <NavItems />
    </ul>
  )
}

export default DesktopMenu
