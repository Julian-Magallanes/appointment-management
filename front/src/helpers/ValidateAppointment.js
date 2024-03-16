export default function ValidateAppointments(userAppointment){
    const errors = {}
    
    if(!userAppointment.date)errors.date = "Debe ingresar una fecha";
    
    if(!userAppointment.time)errors.time = "Debe ingresar un horario";
   
    if(!userAppointment.description)errors.description = "Debe ingresar un tipo de atencion";

    if(!userAppointment.place)errors.place = "Debe ingresar una sucursal";
    
    return errors;
}