function todos (state = [], action) {
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
      let index = action.index;
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ];
    default:
      return state;
  }
}

export default todos;
