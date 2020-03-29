import gql from "graphql-tag";

export const FIND_TODO_BY_ID = gql`
  query findTodo($id: ID!) {
    todo: findTodo(id: $id) {
      id
      lines {
        type
        color
        text
      }
      completed
    }
  }
`;
