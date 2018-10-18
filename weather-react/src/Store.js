import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk'
import {reducer as weatherReducer} from './weather/';

const reducer = combineReducers({
  weather: weatherReducer,
  
});

const middlewares = [thunkMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducer, {}, composeEnhancers(
    applyMiddleware(...middlewares),
));
