import "graphql-import-node";
import { print } from "graphql";

import Book from "./book.graphql";
import Mutation from "./mutation.graphql";
import Query from "./query.graphql";

export const typeDefs = [Book, Query, Mutation].map(print).join("\n");
