import { GraphQLError } from "graphql";
import { ErrorCodes } from "~/utils/ApiErrors";

export function createGraphQLError(
	message: string = "Internal server error",
	status: number = 500,
	code: string = ErrorCodes.INTERNAL_SERVER_ERROR,
	details?: Record<string, string[]>,
): GraphQLError {
	return new GraphQLError(message, {
		extensions: {
			code,
			status,
			...(details ? { details } : {}),
		},
	});
}
