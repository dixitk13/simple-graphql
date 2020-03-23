import gql from "graphql-tag";

export const ADD_TODO = gql`
  mutation addTodo($todo: CreateTodoInput) {
    addTodo(todo: $todo) {
      id
      lines {
        type
      }
      completed
    }
  }
`;
