import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { getProfile } from "../controllers/authController.js";

const router = express.Router();

// Protect every route below
router.use(authMiddleware);

// Protected Routes
router.get("/profile", getProfile);

export default router;