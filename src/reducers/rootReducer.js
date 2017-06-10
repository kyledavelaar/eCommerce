import cart from './cartReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  cart
});

export default rootReducer;