const Menuitems = ['ABOUT ME', 'PORTFOLIO', 'CONTACT']

const NavItems = () => {
  return (
    <>
      {Menuitems.map((items, index) => (
        <li
          className='text-lg md:text-xs font-bold text-[#eeeeee] hover:text-[#68D7FF] cursor-pointer transition duration-500 ease-in-out list-none'
          key={index}
        >
          {items}
        </li>
      ))}
    </>
  )
}

export default NavItems
