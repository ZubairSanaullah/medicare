import express from 'express'
import { clerkMiddleware, requireAuth } from '@clerk/express'
import { cancelAppointment, confirmAppointment, createAppointment, getAppointments, getAppointmentsByDoctor, getAppointmentsByPatient, getRegisterUsersCount, getStats, updateAppointment } from '../controllers/appointmentControllers.js'

const appointmentRouter = express.Router();

appointmentRouter.get('/', getAppointments);
appointmentRouter.get('/stats/summary', getStats);
appointmentRouter.post('/confirm', confirmAppointment);

// Authenticated routes
appointmentRouter.post('/', clerkMiddleware(), requireAuth(), createAppointment);
appointmentRouter.get('/me', clerkMiddleware(), requireAuth(), getAppointmentsByPatient);

appointmentRouter.get('/doctor/:doctorId', getAppointmentsByDoctor);

appointmentRouter.post('/:id/cancel', cancelAppointment);
appointmentRouter.get('/patients/count', getRegisterUsersCount);
appointmentRouter.put('/:id', updateAppointment);

export default appointmentRouter;