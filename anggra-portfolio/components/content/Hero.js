import HighlightText from './HighlightText'
import NiceButton from './NiceButton'
import { HiOutlineArrowDown } from 'react-icons/hi'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section
      id='hero'
      className='flex flex-col justify-center items-center h-screen px-4 md:px-24 space-y-24'
    >
      <div className='flex flex-col justify-center items-center  space-y-6 md:space-y-8'>
        <motion.h1
          className='text-center font-bold text-[2em] sm:text-[3em] md:text-[4em] bg-gradient-to-br from-[#7B61FF] to-[#5FCEFD] text-transparent bg-clip-text'
          initial={{ opacity: 0, x: '-100' }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Hi, I&#39;m Anggra
        </motion.h1>
        <p className='text-center text-[#eeeeee] text-lg md:text-2xl'>
          A self-thought
          <HighlightText> UI Designer & Front End Developer</HighlightText>.
          Specializes building an outstanding Digital Product.
        </p>
        <Link to='contact' spy smooth duration={750} offset={-70}>
          <NiceButton>Get in Touch</NiceButton>
        </Link>
      </div>
      <div className='flex justify-center items-center'>
        <span className='animate-bounce relative inline-flex justify-center items-center rounded-full h-10 w-10 border-2 border-[#68D7FF] '>
          <HiOutlineArrowDown size={20} color='#68D7FF' />
        </span>
      </div>
    </section>
  )
}

export default Hero
