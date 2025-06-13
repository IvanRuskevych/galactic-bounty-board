import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import {ApolloServer} from "apollo-server-express";
import {resolvers, typeDefs} from "./schema";

dotenv.config()

const PORT = process.env.PORT || 3000

async function startServer() {
    const app = express()
    app.use(cors())

    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    })

    await apolloServer.start()
    // @ts-ignore
    apolloServer.applyMiddleware({app, path: '/graphql'})

    app.listen(PORT, () => {
        console.log(`🚀 Server ready at http://localhost:${PORT}/graphql` );
    })
}

startServer().catch(console.error);
