import React from 'react';
import './Header.css';

const Header = () =>
  <header className="header">
    <div className="container">
      <button className="back-button">&lsaquo; Back</button>
    </div>
    <h3>Hotel Details</h3>
    <div className="container">
      <span className="logo" />
    </div>
  </header>;

export default Header;
