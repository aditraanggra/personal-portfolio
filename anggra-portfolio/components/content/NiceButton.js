const NiceButton = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className='flex flex-row justify-center items-center h-12 py-[18px] px-8 border-2 rounded-full  border-[#00CDAC] text-[#00CDAC] hover:shadow-lg hover:shadow-[#00CDAC52] font-semibold text-xs uppercase hover:-translate-y-2 transition duration-500 ease-in-out'
    >
      {children}
    </button>
  )
}

export default NiceButton
