import { Router } from "express";

import { authenticate } from "middlewares/auth";
import { putUserValidator } from "validators/users";
import { getUser, putUser } from "controllers/users";

const router = Router();

router.all("/user", authenticate);

router.get("/user", getUser);
router.put("/user", putUserValidator, putUser);

export default router;