import express from "express";
import { RequestHandler } from "express";
import {
  registerUser,
  loginUser,
  getCurrentUser,
  updateUserProfile,
} from "../controllers/authController";
import { auth } from "../middleware/auth";
import { validateRegistration, validateLogin } from "../middleware/validation";

const router = express.Router();

// Public Routes
router.post(
  "/register",
  validateRegistration as RequestHandler[],
  registerUser as RequestHandler,
);

router.post(
  "/login",
  validateLogin as RequestHandler[],
  loginUser as RequestHandler,
);

router.get("/logout", auth as RequestHandler, logoutUser as RequestHandler);

// Protected Routes
router.get("/me", auth as RequestHandler, getCurrentUser as RequestHandler);

router.put(
  "/profile",
  auth as RequestHandler,
  updateUserProfile as RequestHandler,
);

export default router;
