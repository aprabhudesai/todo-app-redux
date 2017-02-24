let uuid = require('node-uuid');

const todos = [
  {
    id: uuid.v4(),
    text: 'Do 1',
    completed: false
  },
  {
    id: uuid.v4(),
    text: 'Do 2',
    completed: false
  },
  {
    id: uuid.v4(),
    text: 'Do 3',
    completed: false
  },
  {
    id: uuid.v4(),
    text: 'Do 4',
    completed: false
  },
  {
    id: uuid.v4(),
    text: 'Do 5',
    completed: false
  },
  {
    id: uuid.v4(),
    text: 'Do 6',
    completed: true
  },
  {
    id: uuid.v4(),
    text: 'Do 7',
    completed: false
  },
  {
    id: uuid.v4(),
    text: 'Do 8',
    completed: true
  },
  {
    id: uuid.v4(),
    text: 'Do 9',
    completed: true
  },
  {
    id: uuid.v4(),
    text: 'Do 10',
    completed: false
  },
  {
    id: uuid.v4(),
    text: 'Do 11',
    completed: false
  },
  {
    id: uuid.v4(),
    text: 'Do 12',
    completed: false
  }
];

export default todos;
