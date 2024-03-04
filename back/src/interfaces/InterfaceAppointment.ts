
export enum AppointmentStatus{
    ACTIVE = 'active',
    CANCELED = 'canceled'
}

interface interfaceAppointment{
    id:number;
    date:string;
    time:string;
    userId:number;
    status:AppointmentStatus
}
export default interfaceAppointment