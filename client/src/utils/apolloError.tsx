import {ApolloError} from "@apollo/client";
import type {GraphQLErrorExtensions} from "../types";

interface ErrorHandlerResult {
    fieldErrors: Record<string, string[]> | null;
    error: string | null;
}

export function handleApolloError(err: unknown): ErrorHandlerResult {
    if (err instanceof ApolloError) {
        const graphQLErrors = err.graphQLErrors;

        if (graphQLErrors.length > 0) {
            const firstError = graphQLErrors[0];
            const extensions = firstError.extensions as GraphQLErrorExtensions;

            // todo: delete log
            console.log("GraphQL error extensions: ", extensions?.details);

            return {
                fieldErrors: extensions?.details || null,
                error: null,
            };
        } else {
            return {
                fieldErrors: null,
                error: err.message,
            };
        }
    } else {
        return {
            fieldErrors: null,
            error: "Unknown error occurred",
        };
    }
}
