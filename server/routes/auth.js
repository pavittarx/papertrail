import { Router } from "express";

import { handleErrors } from "_utils/response";
import { register, login } from "controllers/auth";
import { registerValidator, loginValidator } from "validators/auth";

const router = Router();

router.post("/register", registerValidator, handleErrors(register));
router.post("/login", loginValidator, handleErrors(login));

export default router;