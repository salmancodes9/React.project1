import React, { useState } from "react";
import "./Navbar.css";
import SearchBar from "../SearchBar/SearchBar";
import { FaShoppingCart } from "react-icons/fa";
import { FaFireAlt } from "react-icons/fa";
import { IoStorefront } from "react-icons/io5";
import { MdOutlineContactless } from "react-icons/md";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    console.log(!isToggled);
    setIsToggled(!isToggled);
  };

  return (
    <>
      <nav className={isToggled ? "nav-white" : "nav-black"}>
        <h1>Fast Battle</h1>

        <div className="navigation-links">
          <SearchBar />

          <button style={{ cursor: "pointer" }} onClick={handleToggle}>
            Toggle
          </button>

          <Link to="/div">
          Div
          </Link>

          <Link to="/span">
          Span
          </Link>
          <h4>
            <FaShoppingCart className="cart" />
          </h4>
          <h4>
            <FaFireAlt />
          </h4>
          <h4><IoStorefront /></h4>
          <h4><MdOutlineContactless /></h4>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
