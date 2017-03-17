import React from 'react';
import Todo from './Todo';
import FiltersTab from './FiltersTab';

const TodoList = React.createClass({
  handleAddTodo (e) {
    e.preventDefault();
    let todoText = this.refs.todoText.value;
    this.props.addTodo(todoText);
    this.refs.todoForm.reset();
  },
  render () {
    let { todos, isFetching, params} = this.props;
    if (isFetching && !todos.length) {
      return (
        <div className="placeholder-panel">
          <div className="placeholder-text">
            Loading
            <span className="animated">&nbsp;. . . </span>
          </div>
        </div>
      );
    }
    const visibilityFilter = params.filter || 'all';
    return (
      <div className="todo-panel">
        <FiltersTab filter={visibilityFilter} />
        <div className="todo-list">
          {todos.map((todo, index) => {
            return (
              <Todo key={index} i={index} todo={todo} {...this.props} />
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
