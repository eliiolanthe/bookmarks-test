// src/routes/user.routes.js
import { Router } from "express";
import { getUser } from "../controllers/user.controller.ts";
// import { authenticate } from "../middleware/auth.js";
// import { validateUpdateUser } from "../validators/user.validator.js";

const userRouter = Router();

userRouter.get("/:id", getUser);
//router.get("/:id", authenticate, getUser);

//router.patch("/:id", authenticate, validateUpdateUser, updateUser);

export default userRouter;
