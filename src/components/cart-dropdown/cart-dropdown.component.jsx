import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import { FaCartArrowDown } from 'react-icons/fa';

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items">
      <CustomButton><FaCartArrowDown className="checkout-icon"/> GO TO CHECKOUT</CustomButton>
    </div>
  </div>
)

export default CartDropdown;