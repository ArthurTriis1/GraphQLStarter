import { MutationResolvers } from "../generated/graphql";

const Mutation: MutationResolvers = {
	addBook: (_, { input: { author, title } }, ctx) => {
		ctx.books.push({ author, title });
		return ctx.books.at(-1) ?? {};
	},
};

export default Mutation;
