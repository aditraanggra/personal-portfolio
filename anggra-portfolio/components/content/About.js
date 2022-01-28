import Image from 'next/image'
import HighlightText from './HighlightText'
import Profile from '../../public/about-me-photo.png'
import {
  SiJavascript,
  SiTypescript,
  SiFigma,
  SiNextdotjs,
  SiReact,
} from 'react-icons/si'
import { Element } from 'react-scroll'

const About = () => {
  return (
    <Element name='about-me'>
      <section>
        <h3 className='text-center md:text-left font-semibold text-xl text-[#00CDAC]'>
          About Me
        </h3>
        <div className='flex flex-col-reverse md:flex-row justify-center items-center py-8'>
          {/* about description */}
          <div className='flex flex-col flex-1  space-y-16'>
            <div className='space-y-2'>
              <p className='text-[#eee] text-base text-center md:text-left'>
                Hi, I&#39;m <HighlightText>Anggra Aditra</HighlightText>, a{' '}
                <HighlightText>UI Designer & Front End Developer</HighlightText>{' '}
                from Indonesia.
              </p>
              <p className='text-[#eee] text-base text-center md:text-left'>
                I started career as UI Designer in 2014, where my first project
                was to design a website using Photoshop and I developed it using
                a custom wordpress theme.
              </p>
              <p className='text-[#eee] text-base text-center md:text-left'>
                After that, I decided to learn more about Front End Development
                starting with learning Html, CSS & Javascript. Having two such
                roles helps me to reduce the gap between design and development,
                also helps me to collaborate well.
              </p>
              {/* Stack */}
            </div>
            <div className='flex flex-row justify-between items-start px-4 md:px-0'>
              <SiJavascript size={40} />
              <SiReact size={40} />
              <SiTypescript size={40} />
              <SiNextdotjs size={40} />
              <SiFigma size={40} />
            </div>
          </div>

          {/* Profile Picture */}
          <div className='flex flex-1 justify-end mb-8 md:mb-0 -z-10'>
            <div>
              <Image
                src={Profile}
                alt='profile Picure'
                className='float-right'
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </section>
    </Element>
  )
}

export default About
