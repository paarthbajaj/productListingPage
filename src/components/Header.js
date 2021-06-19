import React from "react";

const Header = () => {
  return (
    <nav className="header">
      <div className="logo">Flipkart</div>
      <ul>
        <li className="menu">Our Producs</li>
        <li className="menu">About Us</li>
        <li className="menu">Contact</li>
      </ul>
      <div>
        <i className="fa fa-search"></i>
        <i className="fa fa-shopping-basket"></i>
      </div>
    </nav>
  );
};

export default Header;
