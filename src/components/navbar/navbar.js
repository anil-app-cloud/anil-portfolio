import React, { useState } from 'react';
import {Link} from "react-router-dom"
import './navbar.css';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <Link to="/"><div className="navbar-logo">MyPortfolio</div></Link>
      <div className={`menu-toggle ${showMenu ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`navbar-links ${showMenu ? 'show' : ''}`}>
        <ul>
          <Link to="/"><li className='list-item'>Home</li></Link>
          <Link to="/about" ><li className='list-item'>About Me</li></Link>
          <Link to="/projects"><li className='list-item'>Projects</li></Link>
          <Link to="/contact"><li className='list-item'>Contact</li></Link>
        </ul>
      </div>
    </nav>
  );
}
