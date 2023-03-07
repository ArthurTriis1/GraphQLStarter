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

const resolvers = {
	// Resolver
	Query: {
		books: () => books,
	},
};

const typeDefs = loadSchemaSync("src/graphql/schemas/schema.graphql", {
	loaders: [new GraphQLFileLoader()],
});

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
