const express = require("express");
const cors = require("cors");
const graphqlHTTP = require("express-graphql");

const { schema, root } = require("./schema");

const path = require("path");

const app = express();

// Allow cross-origin
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    // rootValue: root,
    graphiql: true
  })
);

app.use(express.static("public"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

const port = process.env.PORT || 4000;

app.listen(port, () =>
  console.log(`Running a GraphQL API server at localhost:${port}/graphql`)
);
