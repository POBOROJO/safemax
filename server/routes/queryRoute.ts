import express from "express";
import { RequestHandler } from "express";
import {
  createQuery,
  getAllQueries,
  updateQueryStatus,
  respondToQuery,
} from "../controllers/queryController";
import { auth } from "../middleware/auth";

const router = express.Router();

// Public route to submit a query
router.post("/make-query", createQuery as RequestHandler);

// Protected routes for admin
router.get("/queries", auth as RequestHandler, getAllQueries as RequestHandler);

router.patch(
  "/:id/status",
  auth as RequestHandler,
  updateQueryStatus as RequestHandler,
);

router.post(
  "/:id/respond",
  auth as RequestHandler,
  respondToQuery as RequestHandler,
);

export default router;
