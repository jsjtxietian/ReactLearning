import { createStore, compose,combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import resetEnhancer from './enhancer/reset.js';

const originalReducers ={
    routing : routerReducer,
};

const reducer = combineReducers(originalReducers);

const storeEnhancers = compose(
    resetEnhancer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const initialState = {};

const store = createStore(reducer,initialState,storeEnhancers);
store._reducers = originalReducers;

export default store;