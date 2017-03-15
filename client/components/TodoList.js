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
  getVisibleTodos () {
    var visibilityFilter = this.props.params.filter || 'all';
    const allIds = this.props.todos.idsByFilter[visibilityFilter];
    return allIds.map((id) => this.props.todos.byIds[id]);
  },
  render () {
    let todos = this.getVisibleTodos();
    console.log('TODOS:', todos );
    var visibilityFilter = this.props.params.filter || 'all';
    return (
      <div className="todo-panel">
        <FiltersTab filter={visibilityFilter} />
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
