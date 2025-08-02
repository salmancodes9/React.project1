import React, { useState } from 'react'
import "./Navbar.css"
import SearchBar from "../SearchBar/SearchBar"

const Navbar = () => {

  const [isToggled, setIsToggled] = useState(false);
  
  const handleToggle = () =>{
    console.log(!isToggled);
    setIsToggled(!isToggled)
  }


  return (
    <>
    <nav className={isToggled ? 'nav-white' : 'nav-black'}>
        <h1>Fast Battle</h1>
       

        <div className='navigation-links'>

        
            <SearchBar/>
            
          
          <button style={{cursor:'pointer'}} onClick={handleToggle}>
            Toggle
          </button>
            <h4>Cart</h4>
            <h4>Deals</h4>
            <h4>Store</h4>
            <h4>Helpline</h4>
        </div>
    </nav>
    </>
  )
}

export default Navbar
