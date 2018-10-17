const express = require("express");
const cors = require("cors");
const graphqlHTTP = require("express-graphql");
var graphql = require("graphql");

const { todoQuery, todosRoot } = require("./src/todos");
const { postsQuery, postsRoot, postRoot } = require("./src/posts");

var schema = new graphql.GraphQLObjectType({
  name: "Query",
  fields: function() {
    return {
      todos: todoQuery,
      posts: postsQuery
    };
  }
});

const root = {
  todos: todosRoot,
  posts: postsRoot,
  post: postRoot
};

const app = express();
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
  })
);

const port = process.env.PORT || 4000;
app.listen(port);
console.log(`Running a GraphQL API server at localhost:${port}/graphql`);
