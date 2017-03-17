import * as api from '../api/todos';

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

export const requestTodos = (filter) => {
  return {
    type: 'REQUEST_TODOS',
    filter
  };
};

const receiveTodos = (filter, response) => {
  return {
    type: 'RECEIVE_TODOS',
    filter,
    response
  };
}

export const fetchTodos = (filter) => {
  return api.fetchTodos(filter).then((response) => {
    return receiveTodos(filter, response);
  });
}
// export function setVisibilityFilter(filter) {
//   return {
//     type: 'SET_VISIBILITY_FILTER',
//     filter
//   };
// }
