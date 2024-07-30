import React from 'react';
import './Navbar.css';
import financeProLogo from '../Images/logo_scb2.png';
import scbLogo from '../Images/logo_scb2.png';

const Navbar = () => {
  return (
    <header className="app-header">
      <div className="left-section">
        <div className="logo">
          <img src={financeProLogo} alt="FinancePro Logo" className="finance-logo" />
          <h1>FinancePro</h1>
        </div>
      </div>
      <div className="right-section">
        <nav>
          <ul>
            <li><button className="nav-button register">Log In</button></li>
            <li><button className="nav-button register">Register</button></li>
            <li><img src={scbLogo} alt="SCB Logo" className="scb-logo" /></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
