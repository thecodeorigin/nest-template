/**
 * Generic Http error message
 */
const HTTP_MESSAGE = Object.freeze({
  UNKNOWN_SERVER_ERROR: "A system error has occured. Please try again later.",
  NOT_FOUND: "The resource that you were looking for was not found.",
  DUPLICATED: "The resource already exists on the server",
  QUERY_ERROR: "A query error has occured. Please try again later.",
});

/**
 * Generic validation error message
 */
const VALIDATION_MESSAGE = Object.freeze({
  PASSWORD_NOT_MATCH: "Password is incorrect",
});

const ENTITY_MESSAGE = Object.freeze({
  USER_NOT_FOUND: "The user that you were looking for was not found.",
});

export { HTTP_MESSAGE, VALIDATION_MESSAGE, ENTITY_MESSAGE };
