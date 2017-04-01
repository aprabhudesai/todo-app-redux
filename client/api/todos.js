import todos from '../data/todos';
let uuid = require('node-uuid');

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const fetchTodos = (filter) => {
  return delay(2000).then(() => {
      if (Math.random() > 0.5) {
        throw new Error('Error getting TODOS!!');
      }
      switch (filter) {
        case 'all':
          return todos;
          break;
        case 'active':
          return todos.filter((t) => !t.completed);
        case 'completed':
          return todos.filter((t) => t.completed);
        default:
          throw new Error(`Unknown filter ${filter}`);
      }
    }
  );
};
