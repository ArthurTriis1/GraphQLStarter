import { QueryResolvers } from "../generated/graphql";

const Query: QueryResolvers = {
	books: (_, __, ctx) => ctx.books,
};

export default Query;
