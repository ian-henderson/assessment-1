import React from 'react';
import './Footer.css';

const buttonNames = ['Map', 'Photo Gallery', 'Amenities'];

const renderButton = buttonName =>
  <button className="footer-button">
    {buttonName}
    <span className="button-arrow">&rsaquo;</span>
  </button>;

const Footer = () =>
  <div className="footer">
    {buttonNames.map(renderButton)}
  </div>;

export default Footer;
