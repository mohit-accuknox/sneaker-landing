import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
        <nav className="nav_items">
          <div className="left">
            <img src="/images/icon-menu.png" alt="menu-icon" className="menu" />
            <h1 className="logo_name">sneakers</h1>
            <ul className="nav_list">
              <li>
                <a href="#">Collections</a>
              </li>
              <li>
                <a href="#">Men</a>
              </li>
              <li>
                <a href="#">Women</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="right">
            <img
              className="cart-logo"
              src="/images/icon-cart.png"
              alt="cart-icon"
            />
            <img
              className="avatar-logo"
              src="/images/image-avatar.png"
              alt="avatar-img"
            />
          </div>
        </nav>
      </div>
  );
};

export default Navbar;
