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
    lines: [LinesInput]
    completed: Boolean
  }

  type Mutation {
    addTodo(todo: CreateTodoInput): Todo
    updateTodo(todo: UpdateTodoInput): Todo
  }
`;
