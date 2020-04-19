import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart-selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { ReactComponent as Logo } from '../../assets/react-brands.svg';
import './header.styles.scss';
import { FaShoppingBasket, FaEnvelope, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';

const Header = ({ currentUser, hidden }) => (
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
    {
      hidden ? null :
    <CartDropdown />
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);