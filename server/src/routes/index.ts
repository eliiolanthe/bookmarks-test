// The routes/index.js file acts as a barrel file, mounting all sub-routers under their base path:

// src/routes/index.js
import { Router } from "express";
import authRoutes from "./auth.routes.js";
import userRoutes from "./user.routes.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/users", userRoutes);

export default router;
