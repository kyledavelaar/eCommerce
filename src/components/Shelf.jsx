import React from 'react';
import * as CartActions from '../actions/cartAction';
import * as ShelfActions from '../actions/shelfAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Shelf = (props) =>  {
 
  const initial = props.shelfActions.populate().item;
  
  const shelfItems = initial.map((item, i) => {
    return (
      <li key={i}>
        <button onClick={props.cartActions.addToCart.bind(this, item)}> + </button>
        {item}
      </li>
    )
  })

  return (
    <div>
      <h2>Shelf</h2>
      <ul>
        {shelfItems}
      </ul>
    </div>
  );
  
}


function mapDispatchToProps(dispatch) {
  return {
    cartActions: bindActionCreators(CartActions, dispatch),
    shelfActions: bindActionCreators(ShelfActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Shelf);