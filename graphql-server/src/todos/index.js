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
    lines: [
      { text: "Read emails ", type: "bold" },
      { text: "And Reply Emails ", type: "code" },
      { text: "And again Read emails. " },
      { text: "Sit back and drink coffe now" }
    ],
    completed: false
  },
  {
    id: 1446412740883,
    lines: [
      { text: "Buy orange ", type: "color", color: "orange" },
      { text: "Buy Banana ", type: "color", color: "yellow" },
      { text: "Buy Plum ", type: "color", color: "red" },
      { text: "Buy Pear ", type: "color", color: "green" }
    ],
    completed: true
  }
];

const returnTODOs = function() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(TODOs);
    }, 1000);
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
      lines: { type: new GraphQLList(LinesType) },
      completed: { type: GraphQLBoolean }
    };
  }
});

const LinesType = new GraphQLObjectType({
  name: "lines",
  fields: function() {
    return {
      type: { type: GraphQLString },
      color: { type: GraphQLString },
      text: { type: GraphQLString }
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
