const { GraphQLSchema } = require("graphql");

const { todoRootQuery, todosRoot } = require("./src/todos");
const { postsQuery, postsRoot, postRoot } = require("./src/posts");

// var schema = new graphql.GraphQLObjectType({
//   name: "Query",
//   fields: function() {
//     return {
//       todos: todoQuery,
//       posts: postsQuery
//     };
//   }
// });
//
const root = {
  todos: todosRoot
  // posts: postsRoot,
  // post: postRoot
};

const schema = new GraphQLSchema({
  query: todoRootQuery
});

module.exports = {
  schema,
  root
};
