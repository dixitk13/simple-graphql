var graphql = require("graphql");

const graphqlHTTP = require("express-graphql");
const gql = require("graphql-tag");
const { buildASTSchema } = require("graphql");

const POSTS = [
  { author: "John Doe", body: "Hello world" },
  { author: "Jane Doe", body: "Hi, planet!" }
];

const postsQuery = buildASTSchema(gql`
  type Query {
    posts: [Post]
    post(id: ID!): Post
  }

  type Post {
    id: ID
    author: String
    body: String
  }
`);

const mapPost = (post, id) => post && { id, ...post };

module.exports = {
  postsQuery: new graphql.GraphQLSchema({ query: postsQuery }),
  postsRoot: () => POSTS.map(mapPost),
  postRoot: ({ id }) => mapPost(POSTS[id], id)
};
