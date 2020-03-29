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
  let targetTodoIndex = todos.findIndex(x => x.id === todo.id);

  if (targetTodoIndex === -1) {
    console.log("Error!");
    return myPromise(todo);
  }

  let targetTodo = todos.find((_, index) => index === targetTodoIndex);

  todos = todos.filter((_, index) => index !== targetTodoIndex);

  targetTodo = { ...targetTodo, ...todo };

  if (todo.deleted || todo.completed) {
    todos = [...todos, targetTodo];
  } else {
    todos = [targetTodo, ...todos];
  }

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
