import { BookResolvers } from "../generated/graphql";

const Book: BookResolvers = {
	author: (root) => root.author ?? "",
};

export default Book;
