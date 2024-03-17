export default function ValidateAppointments(userAppointment){
    const errors = {}
    
    if(!userAppointment.date)errors.date = "Debe ingresar una fecha";
    else {
        const selectedDate = new Date(userAppointment.date);
        const dayOfWeek = selectedDate.getDay(); 
        
        
        if (dayOfWeek === 5 || dayOfWeek === 6) {
            errors.date = "No se pueden seleccionar citas para los sábados o domingos.";
        }
    }
    if(!userAppointment.time)errors.time = "Debe ingresar un horario";
   
    if(!userAppointment.description)errors.description = "Debe ingresar un tipo de atencion";

    if(!userAppointment.place)errors.place = "Debe ingresar una sucursal";
    
    return errors;
}