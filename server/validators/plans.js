import { body } from "express-validator";
import { hasErrors } from "_utils/response";

export const createPlanValidator = [
  body("task").notEmpty().isString(),
  body("description").optional().notEmpty().isString(),
  body("type").notEmpty().isString().isIn(["scheduled", "completed", "overdue"]).withMessage("type can only be scheduled/completed/overdue"),
  body("time").optional().notEmpty().withMessage("Time must be a valid date time."),
  async (req, res, next) => {
    if (hasErrors(req, res)) return;

    next();
  }
];

export const putPlanValidator = [

]