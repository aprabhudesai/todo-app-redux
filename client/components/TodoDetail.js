import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const TodoDetail = React.createClass({
  getInitialState () {
    return {
      editable: false
    };
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
        <ReactCSSTransitionGroup
          transitionName="textarea-transition"
          transitionEnter={false}
          transitionLeave={false}
          transitionAppear={true}
          transitionAppearTimeout={500}>
          <div className="todo-editable" key="btn-1">
            <textarea ref="todoContent" cols="30" rows="5" defaultValue={currentTodo.text}></textarea>
          </div>
        </ReactCSSTransitionGroup>
      );
      buttonClass.push('glyphicon-floppy-disk');
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
