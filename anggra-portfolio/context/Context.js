import { useState, createContext } from 'react'

function AppContext() {
  const NavContext = createContext()

  const NavProvider = (props) => {
    const [isOpen, setOpen] = useState(false)

    const HandleClosed = () => setOpen(false)

    const NavState = {
      isOpen,
      setOpen,
      HandleClosed,
    }

    return (
      <NavContext.Provider value={NavState}>
        {props.children}
      </NavContext.Provider>
    )
  }

  return {
    NavProvider,
    NavContext,
  }
}

export default AppContext()
