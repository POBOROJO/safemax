import express, { RequestHandler } from "express";
import {
  createAppointment,
  getAppointments,
  updateAppointmentStatus,
} from "../controllers/appointmentController";
import { auth } from "../middleware/auth";

const router = express.Router();

// Explicitly type the router methods
router.post("/book", createAppointment);
router.get("/schedule", auth as RequestHandler, getAppointments);
router.patch("/:id/status", auth as RequestHandler, updateAppointmentStatus);

export default router;
