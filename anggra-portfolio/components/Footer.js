import Image from 'next/image'
import Logo from '../public/BrandLogo.svg'

import {
  AiOutlineDribbble,
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMedium,
  AiOutlineYoutube,
} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <div className='flex flex-col justify-center items-center space-y-6'>
        <Image src={Logo} alt='logo' className='cursor-pointer mb-4 -z-10' />
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
            <AiOutlineDribbble />
          </li>
          <li>
            <AiOutlineYoutube />
          </li>
        </ul>
      </div>
      <div className='py-12'>
        <p className='text-center text-sm text-[#eeeeee] font-normal'>
          Build with &#128154; using{' '}
          <a
            href='https://nextjs.org/'
            className='text-[#68D7FF] decoration-solid decoration-[#68D7FF]'
          >
            Next.js
          </a>{' '}
          &{' '}
          <a
            href='https://vercel.com/'
            className='text-[#68D7FF] decoration-solid decoration-[#68D7FF]'
          >
            Vercel
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
