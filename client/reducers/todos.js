let uuid = require('node-uuid');

function todos (state = [], action) {
  let index;
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: uuid.v4(),
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
          id: action.id,
          text: action.text
        },
        ...state.slice(index + 1)
      ];
    default:
      return state;
  }
}

export default todos;
