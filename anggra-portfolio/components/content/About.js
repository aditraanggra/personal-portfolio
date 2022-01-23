import Image from 'next/image'
import HighlightText from './HighlightText'
import Profile from '../../public/about-me-photo.png'

const About = () => {
  return (
    <section id='about-me'>
      <h3 className='text-center md:text-left font-semibold text-xl text-[#5FCEFD]'>
        About
      </h3>
      <div className='flex flex-col-reverse md:flex-row justify-center items-center py-8'>
        {/* about description */}
        <div className='flex-1 space-y-2'>
          <p className='text-[#eee] text-base text-center md:text-left'>
            Hi, I&#39;m <HighlightText>Anggra Aditra</HighlightText>, a{' '}
            <HighlightText>UI Designer & Front End Developer</HighlightText>{' '}
            from Indonesia.
          </p>
          <p className='text-[#eee] text-base text-center md:text-left'>
            I started career as UI Designer in 2014, where my first project was
            to design a website using Photoshop and I developed it using a
            custom wordpress theme.
          </p>
          <p className='text-[#eee] text-base text-center md:text-left'>
            After that, I decided to learn more about Front End Development
            starting with learning Html, CSS & Javascript. Having two such roles
            helps me to reduce the gap between design and development, also
            helps me to collaborate well.
          </p>
        </div>

        {/* Profile Picture */}
        <div className='flex flex-1 justify-end mb-8 md:mb-0'>
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
  )
}

export default About
