import path from "path";
import { mergeTypes, fileLoader } from "merge-graphql-schemas";

const typesArray = fileLoader(path.join(__dirname, "../**/*.types.js"));

export const typeDefs = mergeTypes(typesArray, { all: true });
