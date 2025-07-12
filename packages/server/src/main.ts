import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { context } from "~/context";
import { resolvers, typeDefs } from "~/graphql";
import { formatGraphQLError, validateEnv } from "~/utils";
import "tsconfig-paths/register";

dotenv.config();
validateEnv();

const PORT = process.env.PORT || 4000;

// const CLIENT_URL = process.env.CLIENT_URL;

async function startServer() {
	const app = express();

	app.use(
		cors({
			// origin: CLIENT_URL,
			origin: true,
			credentials: true,
		}),
	);
	app.use(cookieParser());
	app.use(express.json());
	app.use(express.urlencoded({ extended: false }));

	const apolloServer = new ApolloServer({
		typeDefs,
		resolvers,
		formatError: formatGraphQLError,
	});

	await apolloServer.start();

	app.use(
		"/galactic-bounty",
		expressMiddleware(apolloServer, {
			context,
		}),
	);

	app.listen(PORT, () => {
		console.log(`🚀 Server ready at http://localhost:${PORT}/galactic-bounty`);
	});
}

startServer().catch(console.error);
