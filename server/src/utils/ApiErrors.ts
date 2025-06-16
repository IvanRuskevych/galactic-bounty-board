import {createGraphQLError} from "../utils/graphqlError";

export const ApiErrors = {
    BadRequest: (message = 'Bad request') =>
        createGraphQLError(message, 400, 'BAD_REQUEST'),

    Unauthorized: (message = 'Unauthorized') =>
        createGraphQLError(message, 401, 'UNAUTHORIZED'),

    Forbidden: (message = 'Forbidden') =>
        createGraphQLError(message, 403, 'FORBIDDEN'),

    NotFound: (message = 'Not found') =>
        createGraphQLError(message, 404, 'NOT_FOUND'),

    Conflict: (message = 'Conflict') =>
        createGraphQLError(message, 409, 'CONFLICT'),

    UnprocessableEntity: (message = 'Unprocessable entity') =>
        createGraphQLError(message, 422, 'UNPROCESSABLE_ENTITY'),

    InternalServerError: () => createGraphQLError(),
};
