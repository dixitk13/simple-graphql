export const typeDefs = `
  type Todo {
    id: ID
    lines: [Lines]
    completed: Boolean
  }
  
  enum LineType {
    COLOR
    BOLD
    CODE
    NONE
  }

  type Lines {
    type: LineType
    color: String
    text: String
  }

  type Query {
    findAllTodos: [Todo]
    findTodo(id: ID!): Todo
  }
`;
