import React from 'react';
import Navbar from '../components/Navbar';
import * as CartActions from '../actions/cartAction';
import * as ShelfActions from '../actions/shelfAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Cart = (props) =>  {
 
  const cartItems = props.cart.map((item, i) => {
    return (
      <li key={i}><b>{item.title}</b> {item.price}
        <button onClick={props.cartActions.removeFromCart.bind(this, item)}>Remove</button>
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

function mapDispatchToProps(dispatch) {
  return {
    cartActions: bindActionCreators(CartActions, dispatch),
    shelfActions: bindActionCreators(ShelfActions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);