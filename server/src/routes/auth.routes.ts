// # POST /auth/login, /auth/register
// Route is only concerned with HTTP layer: parsing request and sending response
// router.get("/id", userController.getUserById);

import { Router } from "express";
const authRouter = Router();

export default authRouter;