import React from 'react';
import {connect} from 'react-redux';
import {toggleTodo, removeTodo} from '../actions.js';

class TodoItem extends React.Component {

    render() {
        const {onToggle, onRemove, completed, text } = this.props;

        //console.log('enter TodoItem render: ' + text);

        return (
            <li className="todo-item"
                style={{
                textDecoration: completed ? 'line-through' : 'none'
                }}
            >
            <input className="toggle" type="checkbox" checked={completed ? "checked" : ""} readOnly onClick={onToggle} />
            <label className="text">{text}</label>
            <button className="remove" onClick={onRemove}>×</button>
            </li>
        );
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const {id} = ownProps;
    return {
        onToggle: () => dispatch(toggleTodo(id)),
        onRemove: () => dispatch(removeTodo(id))
    }
};

export default connect(null, mapDispatchToProps)(TodoItem);

