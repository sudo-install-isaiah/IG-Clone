import "reflect-metadata";
import { buildSchema } from "type-graphql";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { AppDataSource } from "./data-source";
import { UserResolver } from "./resolvers/users.resolvers";

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

	await apolloServer.start();

	apolloServer.applyMiddleware({ app });

	app.listen(8000);

	console.log("Running a GraphQL API server at http://localhost:8000/graphql");
}

main();
