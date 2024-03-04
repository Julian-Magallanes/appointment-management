
interface interfaceAppointmentsDto{
    id:number;
    date:string;
    time:string;
    userId:number;
    status:'active' | 'canceled'
    username:string;
    password: string;
}
export default interfaceAppointmentsDto