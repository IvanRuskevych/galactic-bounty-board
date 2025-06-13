import {ApolloServer} from "apollo-server-express";
import cors from "cors"
import dotenv from "dotenv"
import express from "express"
import {context} from "./context";
import {resolvers, typeDefs} from "./schema";

dotenv.config()

const PORT = process.env.PORT || 3000

async function startServer() {
    const app = express()
    app.use(cors())

    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
        context,
    })

    await apolloServer.start()
    // @ts-ignore
    apolloServer.applyMiddleware({app, path: '/graphql'})

    app.listen(PORT, () => {
        console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
    })
}

startServer().catch(console.error);
