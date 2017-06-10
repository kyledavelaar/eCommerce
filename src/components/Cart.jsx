import React from 'react';
import { connect } from 'react-redux';
import Shelf from './Shelf';
import Navbar from '../components/Navbar';

const Cart = (props) =>  {
 
  const cartItems = props.cart.map((item, i) => {
    return <li key={i}>{item}</li>
  });

  return (
    <div>
      <h1>Cart</h1>
      <Navbar />
      <Shelf />
      <h1>Cart Items</h1>
      <ol>
        {cartItems}
      </ol>
    </div>
  )
}


function mapStateToProps(state, prop) {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps, null)(Cart);