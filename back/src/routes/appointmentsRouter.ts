import { Router } from "express";
import { cancel, getAllAppointments, getAppointments, schedule } from "../controllers/appointmentsControllers";
const appointmentsRouter = Router();
const appointmentsValidator = require ("../middlewares/appointmentValidators.js")

appointmentsRouter.get('/', getAllAppointments);
appointmentsRouter.get('/:id',getAppointments);
appointmentsRouter.post('/schedule',appointmentsValidator, schedule);
appointmentsRouter.put('/cancel/:id',cancel);

export default appointmentsRouter