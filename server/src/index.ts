import {ApolloServer} from "@apollo/server";
import {expressMiddleware} from "@as-integrations/express5";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import {context} from "./context";
import {resolvers, typeDefs} from "./schema";


dotenv.config();

const PORT = process.env.PORT || 3000;

async function startServer() {
    const app = express();

    app.use(cors());

    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
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
