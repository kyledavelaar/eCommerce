import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

export default (initialState) => {
  return createStore(rootReducer, initialState);
}