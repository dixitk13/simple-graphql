import path from "path";
import graphqlHTTP from "express-graphql";
import express from "express";
import cors from "cors";

import { schema, typeDefs, resolvers } from "./root";

const app = express();

// Allow cross-origin
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true
  })
);

app.use(express.static("public"));

app.get("*", (_, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

const port = process.env.PORT || 4000;

app.listen(port, () =>
  console.log(`Running a GraphQL API server at localhost:${port}/graphql`)
);
