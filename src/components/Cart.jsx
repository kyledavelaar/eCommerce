import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';

const Cart = (props) =>  {
 
//  console.log(props.cart)
  const cartItems = props.cart.map((item, i) => {
    // console.log(item.title)
    return (
      <li key={i}><b>{item.title}</b> {item.price}
        <button>Remove</button>
      </li>
    )
  });

  return (
    <div>
      <Navbar />
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