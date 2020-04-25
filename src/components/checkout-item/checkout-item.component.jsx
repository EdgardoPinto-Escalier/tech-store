import React from 'react';
import { connect } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';
import './checkout-item.styles.scss';
import { FaMinus, FaPlus, FaTrashAlt } from 'react-icons/fa';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const {name, imageUrl, price, quantity } = cartItem;
  return(
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="item" />
    </div>
    <span className="name">{name}</span>
      <span className="quantity">
        <FaMinus className="checkout-minus-icon" onClick={() => removeItem(cartItem)} /> 
          {quantity} 
        <FaPlus className="checkout-plus-icon" onClick={() => addItem(cartItem)}/>
      </span>
    <span className="price">$ {price}.00</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}><FaTrashAlt /></div>
  </div>
)};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);