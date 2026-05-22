import express from "express";
import { clerkMiddleware, requireAuth } from "@clerk/express";
import {
    createServiceAppointment,
    confirmServiceAppointment,
    getServiceAppointments,
    getServiceAppointmentById,
    updateServiceAppointment,
    cancelServiceAppointment,
    getServiceAppointmentStats,
    getServiceAppointmentsByPatient,
} from "../controllers/serviceAppointmentController.js";

const serviceAppointmentRouter = express.Router();

serviceAppointmentRouter.get("/", getServiceAppointments);
serviceAppointmentRouter.get("/confirm", confirmServiceAppointment);
serviceAppointmentRouter.get("/stats/summary", getServiceAppointmentStats);

serviceAppointmentRouter.post("/", clerkMiddleware(), requireAuth(), createServiceAppointment);

serviceAppointmentRouter.get("/me", clerkMiddleware(), requireAuth(), getServiceAppointmentsByPatient);

serviceAppointmentRouter.get("/:id", getServiceAppointmentById);
serviceAppointmentRouter.put("/:id", updateServiceAppointment);
serviceAppointmentRouter.post("/:id", cancelServiceAppointment);

export default serviceAppointmentRouter;
