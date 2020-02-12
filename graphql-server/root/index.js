import { makeExecutableSchema } from "graphql-tools";

import { typeDefs } from "./root.types";
import { resolvers } from "./root.resolvers";
const schema = makeExecutableSchema({ typeDefs, resolvers });

export { typeDefs, resolvers, schema };
