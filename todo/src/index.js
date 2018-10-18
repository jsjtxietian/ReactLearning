import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import TodoApp from './ToDoApp';

import store from './Store.js';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store= {store}>
        <TodoApp />
    </Provider> , 
    document.getElementById('root')
);
registerServiceWorker();
