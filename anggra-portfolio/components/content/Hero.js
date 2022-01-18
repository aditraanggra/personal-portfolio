import HighlightText from './HighlightText'
import NiceButton from './NiceButton'

const Hero = () => {
  return (
    <section id='hero' className='h-screen px-4 md:px-24 py-24'>
      <div className='flex flex-col justify-center items-center  space-y-6 md:space-y-8'>
        <h1 className='text-center font-bold text-[3em] md:text-[4em] bg-gradient-to-br from-[#7B61FF] to-[#5FCEFD] text-transparent bg-clip-text'>
          Hi, I&#39;m Anggra
        </h1>
        <p className='text-center text-[#eeeeee] text-lg md:text-2xl'>
          A self-thought
          <HighlightText> UI Designer & Front End Developer</HighlightText>.
          Specializes building an outstanding Digital Product.
        </p>
        <NiceButton>Get in Touch</NiceButton>
      </div>
    </section>
  )
}

export default Hero
