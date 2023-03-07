import { QueryResolvers } from "../__generated__/graphql";

const Query: QueryResolvers = {
	books: (_, __, ctx) => {
		return ctx.books;
	},
};

export default Query;
