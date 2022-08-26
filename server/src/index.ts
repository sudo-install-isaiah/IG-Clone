import "reflect-metadata";
import { buildSchema } from "type-graphql";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { AppDataSource } from "./data-source";
import { graphqlHTTP } from "express-graphql";
import { UserResolver } from "./users/users.resolvers";

async function main() {
	AppDataSource.initialize()
		.then(() => {
			console.log("Database connected!");
		})
		.catch(() => {
			console.log("Failed connection to database!");
		});

	const app = express();

	const apolloServer = new ApolloServer({
		schema: await buildSchema({
			resolvers: [UserResolver],
			emitSchemaFile: true,
		}),
	});

	apolloServer.applyMiddleware({ app });

	app.use(
		"/graphql",
		graphqlHTTP({
			schema: schema,
			graphiql: true,
		})
	);

	app.listen(8000);

	console.log("Running a GraphQL API server at http://localhost:8000/graphql");
}

main();
