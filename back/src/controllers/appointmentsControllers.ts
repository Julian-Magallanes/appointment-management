import { Request, Response } from "express"
import interfaceAppointment from "../interfaces/InterfaceAppointment";
import { createAppointmentService, getAllAppointmentsService, getAppointmentService } from "../services/appointmentsService";
export const getAllAppointments = async (req: Request, res:Response) => {
    const appointments: interfaceAppointment[] = await getAllAppointmentsService();
    res.status(200).json (appointments);
};

export const getAppointments = async (req: Request, res:Response) => {
    const {id} = req.params;
    try{
        const foundAppointment = await getAppointmentService(Number(id));
        res.status(200).json(foundAppointment);
    } catch (error:any){
        res.status(400).json({message: error.message})
    }
};

export const schedule = async (req: Request, res:Response) => {
    try{
        const {id, date,time,userId,status, username, password} = req.body;
        const newAppointment: interfaceAppointment = await createAppointmentService({
            id, date,time,userId,status, username, password
        })
        res.status(200).json (newAppointment)
    } catch (error:any){
        res.status(400).json({message: error.message})
    }
};

export const cancel = async (req: Request, res:Response) => {
    res.status(200).json ({message: 'PUT /appointments/cancel/:id'})
};