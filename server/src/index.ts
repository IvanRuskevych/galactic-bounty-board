import {ApolloServer} from "@apollo/server";
import {expressMiddleware} from "@as-integrations/express5";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser"
import dotenv from "dotenv";
import express from "express";
import {context} from "./context";
import {resolvers, typeDefs} from "./schema";
import {formatGraphQLError, validateEnv} from "./utils";

dotenv.config();

validateEnv()

const PORT = process.env.PORT || 3000;
const CLIENT_URL = process.env.CLIENT_URL;

async function startServer() {
    const app = express();

    app.use(cors(
        {
            origin: CLIENT_URL,
            credentials: true,
        }
    ));
    app.use(cookieParser());

    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
        formatError: formatGraphQLError,
    });

    await apolloServer.start();

    app.use(
        '/galactic-bounty',
        bodyParser.json(),
        expressMiddleware(apolloServer, {
            context,
        })
    );

    app.listen(PORT, () => {
        console.log(`🚀 Server ready at http://localhost:${PORT}/galactic-bounty`);
    });
}

startServer().catch(console.error);
