import React, { useContext } from 'react'
import { GlobalStoreContext } from '../../Store/GlobalStore' 

const Nav = () => {
    const GlobalStore = useContext(GlobalStoreContext)

  return (
    <>
    <div className='navbar'>
    Nav
    </div>
    </>
  )
}

export default Nav