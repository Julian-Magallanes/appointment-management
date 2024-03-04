import interfaceAppointment from "../interfaces/InterfaceAppointment";
import interfaceCredential from "../interfaces/InterfaceCredential";
import interfaceAppointmentsDto from "../interfaces/interfaceAppointmentsDto";

import { createCredential } from "./credentialService";

const appointments:interfaceAppointment[] = [
    {
        id: 1,
        date:"29 años",
        time:"10:00",
        userId:1,
        status: 'active'
}
];
let appointmentId:number = 2
export const getAllAppointmentsService = async () =>{
    const allAppointments: interfaceAppointment[] = appointments;
    return allAppointments;
}

export const getAppointmentService = async(id: number): Promise <interfaceAppointment | null> =>{
    const foundAppointment: interfaceAppointment | undefined= appointments.find(
        appointment => appointment.id === id
    )
    if(!foundAppointment) throw Error ("Turno no encontrado");
    return foundAppointment
}
export const  createAppointmentService = async ( createAppointmentDto: interfaceAppointmentsDto): Promise <interfaceAppointment> => {
    const newCredential:interfaceCredential = await createCredential ({
        username:createAppointmentDto.username,
        password: createAppointmentDto.password,
    });
    const newAppointment: interfaceAppointment = {
        id: appointmentId++,
        date:createAppointmentDto.date,
        time:createAppointmentDto.time,
        userId:newCredential.id,
        status:createAppointmentDto.status,

    };
    appointments.push(newAppointment);
    return newAppointment;
}