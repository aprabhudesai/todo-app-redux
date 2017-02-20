import React from 'react';
import { Link } from 'react-router';

const Todo = React.createClass({
  getCurrentTodo () {
    let index = this.props.i;
    let currentTodo = this.props.todos[index];
    return currentTodo;
  },
  handleRemove(e) {
    this.props.removeTodo(this.props.i)
  },
  render () {
    let currentTodo = this.getCurrentTodo();
    return (
      <div className="todo">
        <div className="todo-text">
          {currentTodo.text}
        </div>
        <div className="todo-controls">
          <Link to={`/todo/${currentTodo.id}`}>
            <button className="ctrl-btn">Detail</button>
          </Link>
          <button className="ctrl-btn glyphicon-trash" onClick={this.handleRemove}></button>
        </div>
      </div>
    );
  }
});

export default Todo;
