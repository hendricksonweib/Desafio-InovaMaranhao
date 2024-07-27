import React, { useState } from 'react';
import Logo from "../../../public/Logo.svg";
import './Nav.css'; 

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header>
        <img  className='logo' src={Logo} alt="macultura.svg" />
        <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="menu-icon__line"></div>
          <div className="menu-icon__line"></div>
          <div className="menu-icon__line"></div>
        </div>
        <nav className={`nav-items ${isOpen ? 'open' : ''}`}>
          <a href=""><li className="item__nav">Culinária</li></a>
          <a href=""><li className="item__nav">Festas</li></a>
          <a href=""><li className="item__nav">Artesanato</li></a>
          <a href=""><li className="item__nav">Turismo</li></a>
        </nav>
      </header>
    </>
  );
};

export default Nav;
