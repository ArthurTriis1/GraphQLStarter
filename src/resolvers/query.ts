import { QueryResolvers } from "../generated/graphql";

const Query: QueryResolvers = {
	books: (_, __, ctx) => ctx.books,
	book: (_, args, ctx) => ctx.books[args.index],
};

export default Query;
