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
