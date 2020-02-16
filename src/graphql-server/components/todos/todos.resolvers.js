import { todos as constantTodos } from "./fakeTodos";
import * as shortid from "shortid";

// allow mutation w/ let!
let todos = constantTodos;

const myPromise = retVal => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(retVal);
    }, 700);
  });
};

const findAllTodos = () => {
  return myPromise(todos);
};

const findTodo = (_, { id }) => {
  return myPromise(todos.find(x => x.id === id));
};

const addTodo = (_, { todo }) => {
  const newTodo = createNewTodo(todo);
  todos = [...todos, newTodo];
  return myPromise(newTodo);
};

const createNewTodo = todo => {
  return {
    id: shortid.generate(),
    lines: todo.lines,
    completed: todo.completed
  };
};

/** TODO: need to improve this! */
const updateTodo = (_, { todo }) => {
  todos = todos.map(x => (x.id === todo.id ? { ...x, ...todo } : x));
  return myPromise(todo);
};

export const resolvers = {
  Query: {
    findAllTodos,
    findTodo
  },
  Mutation: {
    addTodo,
    updateTodo
  }
};
