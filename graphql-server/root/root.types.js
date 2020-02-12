import path from "path";
import { mergeTypes, fileLoader } from "merge-graphql-schemas";

const typesArray = fileLoader(path.join(__dirname, "../**/*.types.js"));

const rootSchema = mergeTypes(typesArray, { all: true });

export { rootSchema as typeDefs };
