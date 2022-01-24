const NiceButton = ({ children }) => {
  return (
    <button className='flex flex-row justify-center items-center h-12 py-[18px] px-8 border-2 rounded-full  border-[#68D7FF] text-[#68D7FF] hover:shadow-lg hover:shadow-[#68d7ff52] font-semibold text-xs uppercase hover:-translate-y-2 transition duration-500 ease-in-out'>
      {children}
    </button>
  )
}

export default NiceButton
