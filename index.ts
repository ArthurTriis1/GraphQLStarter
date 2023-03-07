import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { loadSchemaSync } from "@graphql-tools/load";
import { Book } from "./src/generated/graphql";
import resolvers from "./src/resolvers";

export interface Context {
	books: Book[];
}

const books = [
	// Mock de dados
	{
		title: "The Awakening",
		author: "Kate Chopin",
	},
	{
		title: "City of Glass",
		author: "Paul Auster",
	},
	{
		title: "City of Glass",
	},
];

const typeDefs = loadSchemaSync("src/schemas/schema.graphql", {
	loaders: [new GraphQLFileLoader()],
});

//Inicialização do servidor
const server = new ApolloServer<Context>({
	typeDefs,
	resolvers,
});

// Inicio da aplicação
startStandaloneServer(server, {
	listen: { port: 4000 },
	context: async () => ({
		books,
	}),
}).then(({ url }) => {
	console.log(`🚀  Server ready at: ${url}`);
});
