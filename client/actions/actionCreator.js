import * as api from '../api/todos';
import { getIsFetching } from '../reducers';

export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    text: text
  };
}

export function removeTodo(index){
  return {
    type: 'REMOVE_TODO',
    index
  };
}

export function editTodo(index, id, text) {
  let i = parseInt(index);
  return {
    type: 'EDIT_TODO',
    index: i,
    id,
    text
  };
}

// const requestTodos = (filter) => {
//   return {
//     type: 'REQUEST_TODOS',
//     filter
//   };
// };
//
// const receiveTodos = (filter, response) => {
//   return {
//     type: 'RECEIVE_TODOS',
//     filter,
//     response
//   };
// }

export const fetchTodos = (filter) => (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) {
    return new Promise.resolve();
  }

  dispatch({
    type: 'FETCH_TODOS_REQUEST',
    filter
  });

  return api.fetchTodos(filter).then(
    (response) => {
      return dispatch({
        type: 'FETCH_TODOS_SUCCESS',
        filter,
        response
      });
    },
    (error) => {
      return dispatch({
        type: 'FETCH_TODOS_FAILURE',
        filter,
        message: error.message || 'Something went wrong!'
      });
    }
  );
}
// export function setVisibilityFilter(filter) {
//   return {
//     type: 'SET_VISIBILITY_FILTER',
//     filter
//   };
// }
