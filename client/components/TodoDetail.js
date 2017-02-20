import React from 'react';

const TodoDetail = React.createClass({
  getInitialState () {
    console.log('Init');
    return {
      editable: false
    }
  },
  handleEdit (e) {
    let currentState = this.state;
    currentState.editable = !currentState.editable;
    if (!currentState.editable) {
      this.props.editTodo(this.props.params.todoId, this.refs.todoContent.value);
    }
    this.setState(currentState);
  },
  render () {
    let index = this.props.params.todoId;
    let currentTodo = this.props.todos[index];
    let content = null;
    let buttonClass = ['ctrl-btn'];
    if (this.state.editable) {
      content = (
        <div className="todo-editable">
          <textarea ref="todoContent" cols="30" rows="5" defaultValue={currentTodo.text}></textarea>
        </div>
      );
      buttonClass.push('glyphicon-ok');
    } else {
      content = (
        <div className="todo-text">
          {currentTodo.text}
        </div>
      );
      buttonClass.push('glyphicon-pencil');
    }
    return (
      <div className="todo-detail">
          {content}
        <div className="todo-controls">
          <button className={buttonClass.join(' ')} onClick={this.handleEdit}></button>
        </div>
      </div>
    );
  }
});

export default TodoDetail;
