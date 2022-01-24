import NiceButton from './NiceButton'
import { Element } from 'react-scroll'

const GetInTouch = () => {
  return (
    <Element name='contact'>
      <section>
        <div className='flex flex-col justify-center items-center space-y-6 mb-20 md:mb-40 p-4 sm:p-8 md:p-0'>
          <h1 className='text-[2rem] font-bold text-center bg-gradient-to-br from-[#7B61FF] to-[#5FCEFD] text-transparent bg-clip-text '>
            Get in Touch
          </h1>
          <p className='text-[#eee] text-center'>
            I&#39;m always open to new opportunities, so feel free to contact me
          </p>
          <NiceButton>
            Say, Hello <span className='text-lg'>&#128075;</span>
          </NiceButton>
        </div>
      </section>
    </Element>
  )
}

export default GetInTouch
