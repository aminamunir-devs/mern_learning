import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";

const router = express.Router();

router.get(
  "/dashboard",
  authMiddleware,
  adminMiddleware,
  (req, res) => {
    res.status(200).json({
      success: true,
      message: "Welcome Admin!",
      user: req.user,
    });
  }
);

export default router;