import Image from 'next/image'
import Chips from './Chips'
import PortfolioImage from '../../public/portfolio.jpg'
import { Element } from 'react-scroll'

const Work = () => {
  return (
    <Element name='latest-work'>
      <section>
        <h3 className='text-center md:text-left font-semibold text-xl text-[#00CDAC] mb-10'>
          Latest Project
        </h3>
        <div className='flex flex-col space-y-12'>
          <div className='flex flex-col md:flex-row justify-center items-center md:items-start'>
            <Image
              src={PortfolioImage}
              alt='portfolio image'
              className='rounded-xl'
              width={517}
              height={300}
            />
            <div className='flex flex-col flex-1 p-8 px-4 sm:px-6 md:px-8 md:py-2 space-y-2 '>
              <h4 className='text-[#00CDAC] font-medium'>My Portfolio Title</h4>
              <p className='text-[#eee]'>
                this is the website you are watching, first, I designed this
                website in Figma, and when this website is live, I want my
                website to have good SEO and stable performance, so I think a
                static site generator like Gatsby will be perfect for my
                website. this is also a representation of the skills I have.
              </p>
              <div className='flex flex-wrap space-x-2'>
                <Chips tech='React' />
                <Chips tech='Tailwind' />
                <Chips tech='Next.js' />
                <Chips tech='Sanity' />
              </div>
            </div>
          </div>
          <div className='flex flex-col md:flex-row justify-center items-center md:items-start'>
            <Image
              src={PortfolioImage}
              alt='portfolio image'
              className='rounded-xl'
              width={517}
              height={300}
            />
            <div className='flex flex-col flex-1 p-8 px-4 sm:px-6 md:px-8 md:py-2 space-y-2 '>
              <h4 className='text-[#00CDAC] font-medium'>My Portfolio Title</h4>
              <p className='text-[#eee]'>
                this is the website you are watching, first, I designed this
                website in Figma, and when this website is live, I want my
                website to have good SEO and stable performance, so I think a
                static site generator like Gatsby will be perfect for my
                website. this is also a representation of the skills I have.
              </p>
              <div className='flex flex-wrap space-x-2'>
                <Chips tech='React' />
                <Chips tech='Tailwind' />
                <Chips tech='Next.js' />
                <Chips tech='Sanity' />
              </div>
            </div>
            <div className='flex flex-wrap'></div>
          </div>
          <div className='flex flex-col md:flex-row justify-center items-center md:items-start'>
            <Image
              src={PortfolioImage}
              alt='portfolio image'
              className='rounded-xl'
              width={517}
              height={300}
            />
            <div className='flex flex-col flex-1 p-8 px-4 sm:px-6 md:px-8 md:py-2 space-y-2 '>
              <h4 className='text-[#00CDAC] font-medium'>My Portfolio Title</h4>
              <p className='text-[#eee]'>
                this is the website you are watching, first, I designed this
                website in Figma, and when this website is live, I want my
                website to have good SEO and stable performance, so I think a
                static site generator like Gatsby will be perfect for my
                website. this is also a representation of the skills I have.
              </p>
              <div className='flex flex-wrap space-x-2'>
                <Chips tech='React' />
                <Chips tech='Tailwind' />
                <Chips tech='Next.js' />
                <Chips tech='Sanity' />
              </div>
            </div>
            <div className='flex flex-wrap'></div>
          </div>
        </div>
      </section>
    </Element>
  )
}

export default Work
