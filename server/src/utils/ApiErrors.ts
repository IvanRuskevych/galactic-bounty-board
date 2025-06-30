import { createGraphQLError } from "../utils";

export enum ErrorCodes {
  BAD_REQUEST = "BAD_REQUEST",
  UNAUTHENTICATED = "UNAUTHENTICATED",
  FORBIDDEN = "FORBIDDEN",
  NOT_FOUND = "NOT_FOUND",
  CONFLICT = "CONFLICT",
  UNPROCESSABLE_ENTITY = "UNPROCESSABLE_ENTITY",
  INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR",
}

export const ApiErrors = {
  BadRequest: (message: string | Record<string, string[]> = "Bad request") =>
    typeof message === "string" ?
      createGraphQLError(message, 400, "BAD_REQUEST")
      : createGraphQLError("Invalid input", 400, "BAD_REQUEST", message),
  
  Unauthorized: (message = "Unauthorized") =>
    createGraphQLError(message, 401, ErrorCodes.UNAUTHENTICATED),
  
  Forbidden: (message = "Forbidden") =>
    createGraphQLError(message, 403, ErrorCodes.FORBIDDEN),
  
  NotFound: (message = "Not found") =>
    createGraphQLError(message, 404, ErrorCodes.NOT_FOUND),
  
  Conflict: (message = "Conflict") =>
    createGraphQLError(message, 409, ErrorCodes.CONFLICT),
  
  UnprocessableEntity: (message = "Unprocessable entity") =>
    createGraphQLError(message, 422, ErrorCodes.UNPROCESSABLE_ENTITY),
  
  InternalServerError: () => createGraphQLError(),
};
