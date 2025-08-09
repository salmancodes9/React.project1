import React, { useState } from 'react'
import "./Navbar.css"
import SearchBar from "../SearchBar/SearchBar"
import '@fortawesome/fontawesome-free/css/all.min.css';
import {Link} from 'react-router-dom'

  const Navbar = () => {

  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    console.log(!isToggled);
    setIsToggled(!isToggled)
  }


  return (
    <>
      <nav className={isToggled ? 'nav-white' : 'nav-black'}>

        <h1>Fast Battle</h1>

        <SearchBar />

        <div className='navigation-links'>
          <Link to="/div">
          Div
          </Link>

          <Link to="/span">
          Span
          </Link>
          <h4>Cart</h4>
          <h4>Deals</h4>
          <h4>Store</h4>
          <h4>Helpline</h4>
          <button
            onClick={handleToggle}
            style={{
              cursor: 'pointer', background: 'transparent', border: 'none', fontSize: '1.5rem', color: isToggled ? 'black' : 'white'
            }}>
            <i className="fa-solid fa-circle-half-stroke"></i>
          </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar
