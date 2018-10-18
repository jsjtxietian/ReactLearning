import { view as Counter ,stateKey,reducer } from '../components/Counter';
import React from 'react';

const page = () => {
    return (
        <div>
            <div>Counter</div>
            <Counter caption="any" />
        </div>
    );
};

const initialState=100;

export  {page,reducer,stateKey,initialState};