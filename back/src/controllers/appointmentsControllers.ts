import { Request, Response } from "express"
import { createAppointmentService, getAllAppointmentsService, getAppointmentService, putAppointmentService } from "../services/appointmentsService";
import Appointment from "../entities/Appointment";

//GET /appointments obtiene todos los turnos en lista
export const getAllAppointments = async (req: Request, res:Response) => {
    try{const appointments: Appointment[] = await getAllAppointmentsService();
        res.status(200).json (appointments);
    } catch (error:any){
        res.status(404).json({message: error.message})
    }
};
//GET /appointments/::id obtiene todos un turno de la lista
export const getAppointments = async (req: Request, res:Response) => {
    const {id} = req.params;
    try{
        const foundAppointment = await getAppointmentService(Number(id));
        res.status(200).json(foundAppointment);
    } catch (error:any){
        res.status(400).json({message: error.message})
    }
};
//POST /appointments/schedule crea un nuevo turno
export const schedule = async (req: Request, res:Response) => {
    const {date,time,userId,description, place} = req.body;
    try{
        const newAppointment: Appointment = await createAppointmentService({
            date,time,userId,description, place
        });
        res.status(201).json (newAppointment)
    } catch (error:any){
        res.status(400).json({message: error.message})
    }
};
//PUT /appointments/cancel/::id elimina un turno
export const cancel = async (req: Request, res:Response) => {
    const {id} = req.params;
    try{
        await putAppointmentService(Number(id));
        res.status(200).json ({message:"Turno cancelado"})
    } catch (error:any){
        res.status(400).json({message: error.message})
    }
};