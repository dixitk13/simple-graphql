const { axios } = require("axios");
const {
  GraphQLID,
  GraphQLList,
  GraphQLString,
  GraphQLBoolean,
  GraphQLObjectType
} = require("graphql");

const TODOs = [
  {
    id: 1446412739542,
    title: "Read emails",
    completed: false
  },
  {
    id: 1446412740883,
    title: "Buy orange",
    completed: true
  }
];

const returnTODOs = function() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(TODOs);
    }, 4000);
  });
};

// NOTE: can be used as a fetch too!
// const apiResolver = function(parent, args) {
//   return axios.get("http://some:api/").then(res => res.data);
// };

// TodoType
const TodoType = new GraphQLObjectType({
  name: "todo",
  fields: function() {
    return {
      id: { type: GraphQLID },
      title: { type: GraphQLString },
      completed: { type: GraphQLBoolean }
    };
  }
});

module.exports = {
  todoRootQuery: new GraphQLObjectType({
    name: "Query",
    fields: {
      todos: {
        type: new GraphQLList(TodoType),
        resolve: returnTODOs
      }
    }
  })
};
