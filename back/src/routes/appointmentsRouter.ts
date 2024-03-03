import { Router } from "express";
import { cancel, getAllAppointments, getAppointments, schedule } from "../controllers/appointmentsControllers";
const appointmentsRouter = Router();


appointmentsRouter.get('/', getAllAppointments);
appointmentsRouter.get('/:id',getAppointments);
appointmentsRouter.post('/schedule', schedule);
appointmentsRouter.put('/cancel/:id',cancel);

export default appointmentsRouter