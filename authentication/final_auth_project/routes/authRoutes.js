import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  signup,
  login,
  getProfile,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

// Protected Route
router.get("/profile", authMiddleware, getProfile);

export default router;