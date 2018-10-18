import React from 'react';
import {view as Todos} from './todos/';
import {view as Filter} from './filter/';

function ToDoApp(){
    return (
        <div>
            <Todos />
            <Filter />
        </div>
    );
}

export default ToDoApp;