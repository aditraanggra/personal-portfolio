import Image from 'next/image'
import Logo from '../public/BrandLogo.svg'

import { IconContext } from 'react-icons'
import {
  AiOutlineDribbble,
  AiOutlineCodeSandbox,
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMedium,
} from 'react-icons/ai'

const Footer = () => {
  return (
    <IconContext.Provider
      value={{
        size: '1.5em',
        color: '#eeeeee',
      }}
    >
      <footer>
        <div className='flex flex-col justify-center items-center space-y-6'>
          <Image src={Logo} alt='logo' className='cursor-pointer mb-4' />
          <p className='font-medium text-sm text-[#68D7FF]'>
            Designed & Developed by Me
          </p>
          <ul className='flex flex-row space-x-6'>
            <li>
              <AiOutlineGithub />
            </li>
            <li>
              <AiOutlineLinkedin />
            </li>
            <li>
              <AiOutlineMedium />
            </li>
            <li>
              <AiOutlineCodeSandbox />
            </li>
            <li>
              <AiOutlineDribbble />
            </li>
          </ul>
        </div>
        <div className='py-12'>
          <p className='text-center text-sm text-[#eeeeee] font-normal'>
            Build with &#128154; using Next.JS & Vercel
          </p>
        </div>
      </footer>
    </IconContext.Provider>
  )
}

export default Footer
