import express from "express";
import {
  createAppointment,
  getAppointments,
  updateAppointmentStatus,
} from "../controllers/appointmentController";
import { auth } from "../middleware/auth";

const router = express.Router();

// Explicitly type the router methods
router.post("/book", createAppointment);
router.get("/schedule", auth, getAppointments);
router.patch("/:id/status", auth, updateAppointmentStatus);

export default router;
