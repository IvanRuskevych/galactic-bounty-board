import {GraphQLError} from 'graphql';

export function createGraphQLError(
    message: string = "Internal server error",
    status: number = 500,
    code: string = 'INTERNAL_SERVER_ERROR',
): GraphQLError {
    return new GraphQLError(message, {
        extensions: {
            code,
            status,
        },
    });
}
