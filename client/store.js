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

function promise (store) {
  return (next) => {
    return (action) => {
      if (typeof action.then === 'function') {
        return action.then(next);
      }
      return next(action);
    }
  };
}

const wrapDispatchWithMiddlewares = (store, middlewares) => {
  middlewares.slice().reverse().forEach((middleware) => {
    store.dispatch = middleware(store)(store.dispatch);
  });
};

const store = createStore(rootReducer, defaultState, enhancers);
const middlewares = [];
middlewares.push(promise);
wrapDispatchWithMiddlewares(store, middlewares);

export const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
