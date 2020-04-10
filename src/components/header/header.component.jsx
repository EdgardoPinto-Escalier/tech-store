import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { ReactComponent as Logo } from '../../assets/react-brands.svg';
import './header.styles.scss';
import { FaShoppingBasket, FaEnvelope, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';

const Header = ({ currentUser }) => (
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
      {currentUser ? (
          <div className="option out" onClick={() => auth.signOut()}><FaSignOutAlt className="menu-icon"/> SIGN OUT</div>)
        : (
        <Link className="option" to="/signin">
          <FaSignInAlt className="menu-icon" /> SIGN IN
        </Link>)
      }
      <CartIcon />
    </div>
    <CartDropdown />
  </div>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);