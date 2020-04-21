import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart-selectors';
import './checkout.styles.scss';
import { FaBoxOpen, FaClipboardList, FaListOl, FaMoneyCheckAlt, FaTrashAlt } from 'react-icons/fa';

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span><FaBoxOpen className="cheackout-header-icon"/> PRODUCT</span>
      </div>
      <div className="header-block">
        <span><FaClipboardList className="cheackout-header-icon"/> DESCRIPTION</span>
      </div>
      <div className="header-block">
        <span><FaListOl className="cheackout-header-icon"/> QUANTITY</span>
      </div>
      <div className="header-block">
        <span><FaMoneyCheckAlt className="cheackout-header-icon"/> PRICE</span>
      </div>
      <div className="header-block">
        <span><FaTrashAlt className="cheackout-header-icon"/> REMOVE</span>
      </div>
    </div>
    {
      cartItems.map(cartItem =>
        cartItem.name
      )
    }
    <div className="total">
  <span>TOTAL: ${total}</span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);