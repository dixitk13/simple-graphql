import path from "path";
import { mergeResolvers, fileLoader } from "merge-graphql-schemas";

const resolvers = fileLoader(path.join(__dirname, "../**/*.resolvers.js"));
const rootResolver = mergeResolvers(resolvers);

export { rootResolver as rootValue };
