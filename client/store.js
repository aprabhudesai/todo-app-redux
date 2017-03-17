import { createStore, compose, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import rootReducer from './reducers/index';

const defaultState = {
  todos: {}
};

const middlewares = [promise];

// Do this only if in dev environment
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(createLogger());
}

const enhancers = compose(
  applyMiddleware(...middlewares),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
