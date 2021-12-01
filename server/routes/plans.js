import { Router } from "express";
import { authenticate } from "middlewares/auth";
import { createPlan } from "controllers/plan";

import { handleErrors } from "_utils/response";

import { createPlanValidator } from "validators/plans";

const router = Router();

router.all("/plan*", authenticate);

router.post("/plans", createPlanValidator, handleErrors(createPlan));

export default router;