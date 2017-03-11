import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React from 'react';

import * as actionCreators from '../actions/actionCreator';
import Main from './Main';

class App extends React.Component {
  componentDidMount () {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData();
    }
  }

  fetchData () {
    const { filter, fetchTodos } = this.props;
    fetchTodos(filter);
  }

  render () {
    return (
      <Main {...this.props} />
    );
  }
}

function mapStateToProps(state, { params }) {
  var filter = params.filter || 'all';
  return {
    todos: state.todos,
    filter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
