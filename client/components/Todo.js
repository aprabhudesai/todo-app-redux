import React from 'react';
import { Link } from 'react-router';

const Todo = React.createClass({
  getCurrentTodoIndex () {
    let id = this.props.id;
    let index = this.props.todos.findIndex((todo) => todo.id === id);
    return index;
  },
  handleRemove(e) {
    let index = this.getCurrentTodoIndex();
    this.props.removeTodo(index);
  },
  render () {
    let currentTodo = this.props.todo;
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
