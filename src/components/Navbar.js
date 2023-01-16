import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../styles/Navbar.css";

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);

    const location = useLocation();

    // when location changes set expand navbar to false so it closes the navbar
    // when the location changes
    useEffect(() => {
      setExpandNavbar(false)
    }, [location])
  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
        <div className='toggleButton'>
            <button 
              onClick={() => {
                setExpandNavbar((prev) => !prev);
                }}
              >
            </button>
        </div>
        <div className='links'>
            <Link to="/"> Home </Link>
            <Link to="/Assignments"> Assignments </Link>
            <Link to="/AboutUs"> AboutUs </Link>
        </div> 
    </div>
  )
};

export default Navbar;