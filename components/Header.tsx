import Image from 'next/image'
import React from 'react'

import trademark from '../components/images/trademark.png'

const Header = () => {
  return (
    <div>
        <Image src={trademark} alt='Trade Mark'/>
        <p>_</p>      
        <div>  
        <p>Welcome</p> 
        <p>About</p>
        <p>Collections</p>
        <p>Shop</p>
        </div>
    </div>
  )
}

export default Header;