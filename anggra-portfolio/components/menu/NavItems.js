import { Link } from 'react-scroll'

const Menuitems = ['ABOUT ME', 'LATEST WORK', 'CONTACT']

const NavItems = () => {
  return (
    <>
      {Menuitems.map((items, index) => (
        <li
          className='text-lg md:text-xs font-bold text-[#eeeeee] hover:text-[#68D7FF] hover:-translate-y-2 cursor-pointer transition duration-500 ease-in-out list-none'
          key={index}
        >
          <Link
            to={`${items.split(' ').join('-').toLocaleLowerCase()}`}
            spy
            smooth
            duration={750}
            offset={-70}
          >
            {items}
          </Link>
        </li>
      ))}
    </>
  )
}

export default NavItems
