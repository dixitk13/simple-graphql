// import { makeExecutableSchema } from "graphql-tools";
// import { resolvers } from "./posts.resolvers";

export const typeDefs = `
  type Query {
    getPosts: [Post]
    getPost(id: ID!): Post
  }
  
  type Post {
    id: ID
    author: String
    body: String
  }
`;

// export const schema = makeExecutableSchema({ typeDefs, resolvers });
