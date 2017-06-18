import React from 'react';
import Navbar from './Navbar';
import * as CartActions from '../actions/cartAction';
import * as ShelfActions from '../actions/shelfAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';



const Home = (props) => {
  const items = props.shelfActions.populate().item;

  const shelfItems = items.map((item, i) => {
    return (
      <li
        onClick={props.cartActions.addToCart.bind(this, item)}
        key={i} className="col-sm-4 list-item">
        <img
          className="img-responsive"
          src={item.src}
          alt={item.title} />
        <span className="list-item-desc"><b>{item.title}</b>{item.price}</span>
      </li>
    )
  })

  return (
    <div className="container-fluid">
      <div className="row">
        <Navbar />
        <div className="col-sm-12 header">
          <h1>Home</h1>
        </div>
        <ul className="list">
          {shelfItems}
        </ul>
      </div>
    </div>
  )
}



function mapDispatchToProps(dispatch) {
  return {
    cartActions: bindActionCreators(CartActions, dispatch),
    shelfActions: bindActionCreators(ShelfActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Home);