import React from 'react';
import Todo from './Todo';

const TodoList = React.createClass({
  handleAddTodo (e) {
    e.preventDefault();
    let todoText = this.refs.todoText.value;
    this.props.addTodo(todoText);
    this.refs.todoForm.reset();
  },
  render () {
    return (
      <div className="todo-panel">
        <div className="todo-list">
          {this.props.todos.map((todo, index) => {
            return (
              <Todo key={index} i={index} {...this.props} />
            );
          })}
        </div>
        <div className="todolist-controls">
          <h4 className="title">List Controls</h4>
          <form ref="todoForm" onSubmit={this.handleAddTodo}>
            <input type="text" placeholder="add new todo" ref="todoText"></input>
          </form>
        </div>
      </div>
    );
  }
});

export default TodoList;
