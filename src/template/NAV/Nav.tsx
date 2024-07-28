import React, { useState } from 'react';
import Logo from "../../../public/Logo.svg";
import { Link } from 'react-router-dom';
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
        <Link to="/culinaria" className="nav-items" onClick={toggleMenu}>Culinária</Link>
        <Link to="/festas" className="nav-items" onClick={toggleMenu}>Festas</Link>
        <Link to="/artesanato" className="nav-items" onClick={toggleMenu}>Artesanato</Link>
        <Link to="/turismo" className="nav-items" onClick={toggleMenu}>Turismo</Link>
        </nav>
      </header>
    </>
  );
};

export default Nav;
