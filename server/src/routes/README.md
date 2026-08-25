# src/routes/ – URL Mapping Layer

# Routes should be thin. Their only job is to map HTTP methods and paths to the correct controller function and attach any relevant middleware.

// src/routes/user.routes.js
import { Router } from 'express';
import { getUser, updateUser } from '../controllers/user.controller.js';
import { authenticate } from '../middleware/auth.js';
import { validateUpdateUser } from '../validators/user.validator.js';

const router = Router();

router.get('/:id', authenticate, getUser);
router.patch('/:id', authenticate, validateUpdateUser, updateUser);

export default router;
