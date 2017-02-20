import React from 'react';
import { render } from 'react-dom';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import App from './components/App';
import TodoList from './components/TodoList';
import TodoDetail from './components/TodoDetail';

import store from './store';
import { history } from './store';

require('./styles/main.scss');

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={TodoList}></IndexRoute>
        <Route path="/todo/:todoId" component={TodoDetail}></Route>
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));
