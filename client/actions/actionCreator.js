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

// export function setVisibilityFilter(filter) {
//   return {
//     type: 'SET_VISIBILITY_FILTER',
//     filter
//   };
// }
