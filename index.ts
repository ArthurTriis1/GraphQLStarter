import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

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

// Tipagem do GraphQL
const typeDefs = `#graphql
	type Book {
		title: String
		author: String
	}

	type Query { #Especial type Query
		books: [Book]
	}
`;

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
