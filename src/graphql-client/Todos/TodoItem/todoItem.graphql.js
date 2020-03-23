import gql from "graphql-tag";
export const updateChecked = gql`
  mutation updateTodo($updateInput: UpdateTodoInput!) {
    updateTodo(todo: $updateInput) {
      id
      completed
      deleted
    }
  }
`;
