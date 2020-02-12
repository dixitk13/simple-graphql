import path from "path";
import graphqlHTTP from "express-graphql";
import express from "express";
import cors from "cors";
import { buildSchema } from "graphql";

// Singleton
// import { makeExecutableSchema } from "graphql-tools";
// import { typeDefs, resolvers } from "./components/posts";
// const schema = makeExecutableSchema({ typeDefs, resolvers });

import { typeDefs } from "./root/root.types";
console.log(">>: typeDefs", typeDefs);
import { rootValue } from "./root/root.resolvers";
console.log(">>: rootValue", rootValue);

const schema = buildSchema(typeDefs);
const app = express();

// Allow cross-origin
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue,
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
