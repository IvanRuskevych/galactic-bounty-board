import {createGraphQLError} from "../utils";

export const ApiErrors = {
    BadRequest: (message: string | Record<string, string[]> = "Bad request") =>
        typeof message === "string" ?
            createGraphQLError(message, 400, "BAD_REQUEST")
            : createGraphQLError("Invalid input", 400, "BAD_REQUEST", message),

    Unauthorized: (message = "Unauthorized") =>
        createGraphQLError(message, 401, "UNAUTHORIZED"),

    Forbidden: (message = "Forbidden") =>
        createGraphQLError(message, 403, "FORBIDDEN"),

    NotFound: (message = "Not found") =>
        createGraphQLError(message, 404, "NOT_FOUND"),

    Conflict: (message = "Conflict") =>
        createGraphQLError(message, 409, "CONFLICT"),

    UnprocessableEntity: (message = "Unprocessable entity") =>
        createGraphQLError(message, 422, "UNPROCESSABLE_ENTITY"),

    InternalServerError: () => createGraphQLError(),
};
