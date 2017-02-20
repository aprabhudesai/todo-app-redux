import React from 'react';

const TodoDetail = React.createClass({
  render () {
    let index = this.props.params.todoId;
    let currentTodo = this.props.todos[index];
    return (
      <div className="todo-detail">
        {currentTodo.text}
      </div>
    );
  }
});

export default TodoDetail;
