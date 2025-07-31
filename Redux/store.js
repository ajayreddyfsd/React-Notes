//! store.js
import { createStore } from 'redux';
import rootReducer from './redux/rootReducer';

// The store holds the entire Redux state and connects your reducers
const store = createStore(rootReducer);

export default store;