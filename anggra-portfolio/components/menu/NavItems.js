import { useContext } from 'react'
import { Link } from 'react-scroll'
import Context from '../../context/Context'
import { motion } from 'framer-motion'

const Menuitems = ['ABOUT ME', 'LATEST WORK', 'CONTACT']

const { NavContext } = Context

const variants = {}

const NavItems = () => {
  const props = useContext(NavContext)

  return (
    <>
      {Menuitems.map((items, index) => (
        <Link
          to={`${items.split(' ').join('-').toLocaleLowerCase()}`}
          spy
          smooth
          duration={750}
          offset={-70}
          key={index}
          onClick={props.HandleClosed}
        >
          <li className='text-lg md:text-xs font-bold text-[#00CDAC] hover:text-[#02AAB0] hover:-translate-y-2 cursor-pointer transition duration-500 ease-in-out list-none'>
            {items}
          </li>
        </Link>
      ))}
    </>
  )
}

export default NavItems
