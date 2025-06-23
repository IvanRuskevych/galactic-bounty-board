import {ApolloProvider} from "@apollo/client";
import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {RouterProvider} from "react-router-dom";
import {apolloClient} from "./apollo/client.ts";
import {router} from "./routes/router.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ApolloProvider client={apolloClient}>
            <RouterProvider router={router} />
        </ApolloProvider>
    </StrictMode>,
);
