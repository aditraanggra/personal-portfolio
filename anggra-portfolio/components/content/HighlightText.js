const HighlightText = (props) => {
  const { children } = props
  return <span className='font-medium italic text-[#00CDAC]'>{children}</span>
}

export default HighlightText
