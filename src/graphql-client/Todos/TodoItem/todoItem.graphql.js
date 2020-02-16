import gql from "graphql-tag";
export const UpdateChecked = gql`
  mutation updateTodo($updateInput: UpdateTodoInput!) {
    updateTodo(todo: $updateInput) {
      id
      completed
    }
  }
`;
