import { ApolloClient, from, HttpLink, InMemoryCache } from "@apollo/client";
import { errorLink } from "~/apollo/errorLink";

const httpLink = new HttpLink({
	uri: import.meta.env.VITE_GRAPHQL_API_URL,
	credentials: "include",
});

export const apolloClient = new ApolloClient({
	link: from([errorLink, httpLink]),
	cache: new InMemoryCache(),
});
