import React from 'react';
import Todo from './Todo';

const TodoList = React.createClass({
  handleAddTodo (e) {
    e.preventDefault();
    let todoText = this.refs.todoText.value;
    this.props.addTodo(todoText);
    this.refs.todoForm.reset();
  },
  getVisibleTodos () {
    switch (this.props.visibilityFilter) {
      case 'SHOW_ALL':
        return this.props.todos;
      case 'SHOW_COMPLETED':
        return this.props.todos.filter((todo) => todo.completed);
      case 'SHOW_ACTIVE':
        return this.props.todos.filter((todo) => !todo.completed);
      default:
        return this.props.todos;
    }
  },
  handleFilterClick(type) {
    this.props.setVisibilityFilter(type);
  },
  getFilter (type, text) {
    if (this.props.visibilityFilter === type) {
      return (
        <span className="filter active">{text}</span>
      );
    }
    else {
      return (
        <a href="#" className="filter" onClick={this.handleFilterClick.bind(this, type)}>{text}</a>
      );
    }
  },
  getVisibilityFilters () {
    return (
      <div className="todo-filters">
        {this.getFilter('SHOW_ALL', 'All')}
        { ' | ' }
        {this.getFilter('SHOW_COMPLETED', 'Completed')}
        { ' | ' }
        {this.getFilter('SHOW_ACTIVE', 'Active')}
      </div>
    );
  },
  render () {
    let todos = this.getVisibleTodos();
    let visibilityFilters = this.getVisibilityFilters();
    return (
      <div className="todo-panel">
        {visibilityFilters}
        <div className="todo-list">
          {todos.map((todo, index) => {
            return (
              <Todo key={index} i={index} id={todo.id} {...this.props} />
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
