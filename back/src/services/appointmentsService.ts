import { error } from "console";
import { appointmentsModel, usersModel } from "../config/repositories";
import Appointment from "../entities/Appointment";
import User from "../entities/User";

import interfaceAppointmentsDto from "../interfaces/interfaceAppointmentsDto";

let appointmentId:number = 2
export const getAllAppointmentsService = async () =>{
    const allAppointments: Appointment[] = await appointmentsModel.find();
    return allAppointments;
}

export const getAppointmentService = async(id: number): Promise <Appointment> =>{
    const foundAppointment: Appointment | null= await appointmentsModel.findOneBy({
        id:id
    })
    if(!foundAppointment) throw Error ("Turno no encontrado");
    return foundAppointment
}
export const  createAppointmentService = async ( createAppointmentDto: interfaceAppointmentsDto): Promise <Appointment> => {
    
    const newAppointment: Appointment = appointmentsModel.create(createAppointmentDto)
    await appointmentsModel.save(newAppointment);

    const user: User | null = await usersModel.findOneBy({
        id: createAppointmentDto.userId
    })
    if(!user) throw Error ('Usuario no encontrado');
    newAppointment.user = user;

    await appointmentsModel.save(newAppointment)
    return newAppointment;
}
export const putAppointmentService = async(id : number): Promise <void> =>{
    const appointments:Appointment | null = await appointmentsModel.findOneBy({
        id:id
    });
    if (!appointments) throw Error ("Turno no encontrado")
    appointments.status = "canceled"
    await appointmentsModel.save(appointments);
}