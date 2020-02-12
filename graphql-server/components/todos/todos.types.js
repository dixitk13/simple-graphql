// import { resolvers } from "./todos.resolvers";
// import { makeExecutableSchema } from "graphql-tools";

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
  }

  type Query {
    findAllTodos: [Todo]
    findTodo(id: ID!): Todo
  }
`;

// export const schema = makeExecutableSchema({ typeDefs, resolvers });
