import gql from "graphql-tag";

export const findAllTodos = gql`
  query {
    findAllTodos {
      id
      lines {
        type
        color
        text
      }
      deleted
      completed
    }
  }
`;
