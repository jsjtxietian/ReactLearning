import React from 'react';
import {Router,Route,browserHistory,IndexRoute} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import {combineReducers} from 'redux';
import store from './Store.js';


import App from './pages/App.js'; 
// import Home from './pages/Home.js';
// import About from './pages/About.js';
// import NotFound from './pages/NotFound.js';

import { createHistory } from 'history';
const history = syncHistoryWithStore(createHistory(), store);

const getHomePage = (nextState,callback) =>{
    require.ensure([],function(require){
        callback(null,require('./pages/Home.js').default);
    },'home');
};

const getAboutPage = (nextState, callback) => {
    require.ensure([], function(require) {
      callback(null, require('./pages/About.js').default);
    }, 'about');
  };
  
  const getNotFoundPage = (nextState, callback) => {
    require.ensure([], function(require) {
        callback(null, require('./pages/NotFound.js').default);
    }, '404');
};

const getCounterPage = (nextState, callback) => {
    require.ensure([], function(require) {
        const {page,reducer,stateKey,initialState} = require('./pages/CounterPage.js');

        const state = store.getState();
        store.reset(combineReducers({
            ...store._reducers,
            counter:reducer,
        }),{
            ...state,
            [stateKey] : initialState
        });

        callback(null,page);
    }, 'counter');
};

const Routes = () => (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute getComponent={getHomePage} />
            <Route path="counter"  getComponent={getCounterPage}/>
            <Route path="home" getComponent={getHomePage} />
            <Route path="about" getComponent={getAboutPage} />
            <Route path="*" getComponent={getNotFoundPage} />
        </Route>
    </Router>
);


export default Routes;
