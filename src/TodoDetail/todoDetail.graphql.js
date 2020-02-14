import gql from "graphql-tag";

export const todoDetailQuery = gql`
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
