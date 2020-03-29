export const typeDefs = `
  type Todo {
    id: ID
    lines: [Lines]
    completed: Boolean
    deleted: Boolean
  }
  
  enum LineType {
    COLOR
    BOLD
    ITALIC
    STRIKE
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

  input LinesInput {
    type: LineType
    color: String
    text: String
  }

  input CreateTodoInput {
    lines: [LinesInput]
    completed: Boolean
  }

  input UpdateTodoInput {
    id: ID!
    completed: Boolean
    deleted: Boolean
  }
  
  type Mutation {
    addTodo(todo: CreateTodoInput): Todo
    updateTodo(todo: UpdateTodoInput): Todo
  }
`;
