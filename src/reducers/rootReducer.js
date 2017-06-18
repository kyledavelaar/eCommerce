import cart from './cartReducer';
import shelf from './shelfReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  cart, 
  shelf
});

export default rootReducer;