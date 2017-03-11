import { createStore, compose } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import rootReducer from './reducers/index';
import todos from './data/todos';

const defaultState = {
  todos
};

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

function addPromiseSupportToDispatch (store) {
  const rawDispatch = store.dispatch;
  return (action) => {
    if (typeof action.then === 'function') {
      return action.then(rawDispatch);
    }
    return rawDispatch(action);
  }
}

const store = createStore(rootReducer, defaultState, enhancers);

store.dispatch = addPromiseSupportToDispatch(store);

export const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
