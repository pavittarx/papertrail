import { body } from "express-validator";
import { hasErrors } from "_utils/response";

export const putUserValidator = [
  body("email")
    .optional()
    .notEmpty()
    .isEmail()
    .withMessage("Please provide a valid email."),
  body("name").optional().notEmpty().withMessage("Please provide valid name."),
  async (req, res, next) => {
    if (hasErrors(req, res)) return;
    next();
  },
];
