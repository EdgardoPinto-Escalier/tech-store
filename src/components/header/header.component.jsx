import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/react-brands.svg';
import './header.styles.scss';
import { FaShoppingBasket, FaEnvelope } from 'react-icons/fa';

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        <FaShoppingBasket className="menu-icon" /> SHOP
      </Link>
      <Link className="option" to="/shop">
        <FaEnvelope className="menu-icon" /> CONTACT
      </Link>
    </div>
  </div>
)

export default Header;