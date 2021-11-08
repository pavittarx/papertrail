import { body } from "express-validator";
import { hasErrors } from "_utils/response";

export const registerValidator = [
  body("name").notEmpty().withMessage("The field `name` cannot be empty."),
  body("email").notEmpty().withMessage("The field `body` cannot be empty."),
  body("password")
    .notEmpty()
    .withMessage("The field `password` cannot be empty."),
  body("type")
    .notEmpty()
    .isIn(["buyer", "seller"])
    .withMessage("Possible types: `buyer`, `seller`."),
  body("email")
    .optional()
    .isEmail()
    .withMessage("Please provide a valid email"),
  body("phone").optional().notEmpty().withMessage("Please provide a valid phone number."),
  async (req, res, next) => {
    if (hasErrors(req, res)) return;
    next();
  },
];

export const loginValidator = [
  body("email").notEmpty().withMessage("The field email cannot be empty"),
  body("password")
    .notEmpty()
    .withMessage("The field password cannot be empty."),
  async (req, res, next) => {
    if (hasErrors(req, res)) return;
    next();
  },
];
