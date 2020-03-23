import gql from "graphql-tag";

export const UPDATE_TODO = gql`
  mutation updateTodo($updateInput: UpdateTodoInput!) {
    updateTodo(todo: $updateInput) {
      id
      completed
      deleted
    }
  }
`;
