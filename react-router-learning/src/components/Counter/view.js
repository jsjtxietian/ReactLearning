import React from 'react';
import {bindActionCreators} from 'redux';
import {increment, decrement} from './actions.js';
import {connect} from 'react-redux';

const buttonStyle = {
    margin: '10px'
};

export const stateKey = 'counter';

const Counter = ({onIncrement,onDecrement,value}) =>{
    return (
        <div>
            <button style={buttonStyle} onClick={onIncrement}>+</button>
            <button style={buttonStyle} onClick={onDecrement}>-</button>
            <span>Count : {value}</span>
        </div>
    )
};  

const mapStateToProps = (state) => ({
    value : state[stateKey] || 0,
});

const mapDispatchToProp = (dispatch) => bindActionCreators({
    onIncrement : increment,
    onDecrement : decrement,
},dispatch);

export default connect(mapStateToProps,mapDispatchToProp)(Counter);