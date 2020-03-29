import path from "path";
import { mergeResolvers, fileLoader } from "merge-graphql-schemas";

const resolversArray = fileLoader(
  path.join(__dirname, "../components/**/*.resolvers.js")
);

export const resolvers = mergeResolvers(resolversArray, { all: true });
