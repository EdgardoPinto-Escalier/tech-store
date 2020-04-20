import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart-selectors';
import './cart-dropdown.styles.scss';
import { FaCartArrowDown } from 'react-icons/fa';
import { GoAlert } from 'react-icons/go';

const CartDropdown = ({ cartItems, history }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        cartItems.length ?
        cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
        ))
        :
          <span className="empty-message"><GoAlert className="empty-cart-icon" /> Your Cart Is Empty</span>
      }
    </div>
      <CustomButton onClick={() => history.push('/checkout')}><FaCartArrowDown className="checkout-icon"/> GO TO CHECKOUT</CustomButton>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));