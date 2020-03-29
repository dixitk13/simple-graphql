import gql from "graphql-tag";

export const FIND_ALL_TODOS = gql`
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
