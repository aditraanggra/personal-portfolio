import Image from 'next/image'
import Link from 'next/link'
import Logo from '../public/Logo_48.svg'
//Icons
import {
  AiOutlineDribbble,
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMedium,
  AiOutlineYoutube,
} from 'react-icons/ai'

const icons = [
  AiOutlineDribbble,
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMedium,
  AiOutlineYoutube,
]

const Footer = () => {
  return (
    <footer>
      <div className='flex flex-col justify-center items-center space-y-10'>
        <Image src={Logo} alt='logo' className='cursor-pointer mb-4 -z-10' />
        <ul className='flex flex-row space-x-6'>
          {icons.map((k, i) => {
            const Icon = icons[i]
            return (
              <li key={k}>
                <Link href='/' passHref={true}>
                  <Icon className=' hover:-translate-y-2 hover:shadow-lg hover:shadow-[#00CDAC52] bg-transparent cursor-pointer transition duration-500 ease-in-out list-none' />
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      <div className='py-12'>
        <p className='text-center text-sm text-[#eeeeee] font-normal'>
          Build with &#128154; using{' '}
          <a
            href='https://nextjs.org/'
            className='text-[#00CDAC] decoration-solid decoration-[#00CDAC]'
          >
            Next.js
          </a>{' '}
          &{' '}
          <a
            href='https://vercel.com/'
            className='text-[#00CDAC] decoration-solid decoration-[#00CDAC]'
          >
            Vercel
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
