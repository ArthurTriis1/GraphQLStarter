import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { loadSchemaSync } from "@graphql-tools/load";

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
];

const typeDefs = loadSchemaSync("src/schemas/schema.graphql", {
	loaders: [new GraphQLFileLoader()],
});

const resolvers = {
	// Resolver
	Query: {
		books: () => books,
	},
};

//Inicialização do servidor
const server = new ApolloServer({
	typeDefs,
	resolvers,
});

// Inicio da aplicação
startStandaloneServer(server, {
	listen: { port: 4000 },
}).then(({ url }) => {
	console.log(`🚀  Server ready at: ${url}`);
});
