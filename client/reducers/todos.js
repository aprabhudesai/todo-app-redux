function todos (state = [], action) {
  let index;
  switch (action.type) {
    case 'ADD_TODO':
      let lastTodoId = state[state.length - 1].id;
      return [
        ...state,
        {
          id: lastTodoId + 1,
          text: action.text
        }
      ];
    case 'REMOVE_TODO':
      index = action.index;
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ];
    case 'EDIT_TODO':
      index = action.index;
      return [
        ...state.slice(0, index),
        {
          id: action.index,
          text: action.text
        },
        ...state.slice(index + 1)
      ];
    default:
      return state;
  }
}

export default todos;
