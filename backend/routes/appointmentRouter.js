import express from 'express'
import { clerkMiddleware, requireAuth } from '@clerk/express'
import { confirmPayment, getAppointments, getStats } from '../controllers/appointmentControllers.js'

const appointmentRouter = express.Router();

appointmentRouter.get('/', getAppointments);
appointmentRouter.get('/stats/summary', getStats);
appointmentRouter.post('/confirm', confirmPayment);

// Authroze reoutes