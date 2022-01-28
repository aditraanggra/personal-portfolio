import HighlightText from './HighlightText'
import NiceButton from './NiceButton'
import { HiOutlineArrowDown } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Hero = () => {
  //const [index, setIndex] = useState(0)

  /* useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      4000 // every 4 seconds
    )
    return () => clearTimeout(intervalId)
  }, []) */

  return (
    <section
      id='hero'
      className='flex flex-col justify-center h-screen space-y-24'
    >
      <div className='flex flex-col justify-center items-start px-4 space-y-10'>
        <div className='flex flex-col justify-start items-start  space-y-4 md:space-y-8'>
          <div className='flex flex-row'>
            <h1 className='font-bold text-[1.75em] sm:text-[2.25em] md:text-[3em] text-[#00CDAC]'>
              Hello, <span>&#128075;</span>
              {/* <TextTransition
              className='text-[#00CDAC]'
              text={skills[index % skills.length]}
              delay={500}
              noOverflow
              springConfig={presets.wobbly}
            /> */}
            </h1>
          </div>
          <p className='text-[#eeeeee] text-lg md:text-2xl md:w-1/2'>
            I&rsquo;m a self-thought
            <HighlightText> UI Designer & Front End Developer</HighlightText>.
            Specializes building an outstanding Digital Product.
          </p>
        </div>
        <Link to='contact' spy smooth duration={500} offset={-70}>
          <NiceButton>Get in Touch</NiceButton>
        </Link>
      </div>
      <div className='animate-bounce relative flex justify-center items-center rounded-full h-10 w-10 border-2 border-[#00CDAC] mx-auto '>
        <HiOutlineArrowDown size={20} color='#00CDAC' />
      </div>
    </section>
  )
}

export default Hero
