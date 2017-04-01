import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import * as fromById from './byId';
import * as fromList from './createList';
import { todos } from './todos';

const rootReducer = combineReducers({
  todos,
  routing: routerReducer
});

export default rootReducer;

export const getVisibleTodos = (state, filter) => {
  const ids = fromList.getIds(state.todos.listByFilter[filter]);
  return ids.map((id) => fromById.getTodo(state.todos.byId, id));
};

export const getIsFetching = (state, filter) => {
  return fromList.getIsFetching(state.todos.listByFilter[filter]);
}

export const getErrorMessage = (state, filter) => {
  return fromList.getErrorMessage(state.todos.listByFilter[filter]);
}
