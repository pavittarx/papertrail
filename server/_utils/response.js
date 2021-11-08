/* Wrapper Functions for Streamlining API Responses */
import { validationResult } from "express-validator";


export const Success = (message, data) => {
  return {
    message,
    data,
  };
};

export const Err = (message, data) => {
  return {
    error: true,
    message,
    data,
  };
};

/**
 * @description Resolves Errors for Express Validator
 * @param {req} Express Request Object
 * @param {res} Express Response Object
 * @returns {Boolean}
 */
export const hasErrors = (req, res) => {
  const errors = validationResult(req);
  return errors.isEmpty()
    ? false
    : res.status(400).json(Err("Validation Error", { errors: errors.array() }));
};

/**
 * A wrapper function for handling errors
 * @param {req} - Express Request Object
 * @param {res} - Express Response Object
 * @param {func} - Express Controller Function
 * return {Function} - Express Controller
 */
export const handleErrors = (func) => {
  return async (req, res) => {
    try {
      await func(req, res);
    } catch (error) {
      console.log(error);
      res.status(400).send(Err(error.message));
    }
  };
};
