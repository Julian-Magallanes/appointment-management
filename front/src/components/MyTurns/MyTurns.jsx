import React from "react";
import { useState , useEffect} from "react";
import styles from "./MyTurns.module.css"
import axios from 'axios'

function MyTurns() {
    const [Appointments, setAppointments] = useState([])
    
    useEffect(()=>{
        const DataAxios = async() =>{
            try{const response = await axios.get('http://localhost:3000/appointments') 
            setAppointments(response.data);
        }
            catch{
                console.error('Error en peticion a axios:', error);
            }
        }
        DataAxios()
        },[])
return (
    <div className={styles.MyTurnsContainer}>
            <tr>
                <th>
                    <h4>Fecha de Turno</h4>
                </th>
                <th>
                    <h4>Horario</h4>
                </th>
                <th>
                    <h4>Tipo de atencion</h4>
                </th>
                <th>
                    <h4>Sucursal</h4>
                </th>
                <th>
                    <h4>Estado de turno</h4>
                </th>
            </tr>
            {Appointments.map((turn) => (
                <tr key={turn.id}>
                    <th>
                        <p>{turn.date}</p>
                    </th>
                    <th>
                        <p>{turn.time}</p>
                    </th>
                    <th>
                        <p>{turn.description}</p>
                    </th>
                    <th>
                        <p>{turn.place}</p>
                    </th>
                    <th>
                        <p>{turn.status}</p>
                    </th>
                </tr>
            ))}
        </div>
    )
}
            
export default MyTurns

/*import { useState, useEffect } from "react";
import CardAppointment from "../components/CardAppointment";
import axios from "axios";

const MyAppointments = () =>{
    const [appointments, setAppointment] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/appointments").then((res) => 
            setAppointment(res.data));
    },[]);
    return(
        <>

           <div>
                <h1>Mis Turnos</h1>
                <div>
                    {appointments.map((appointment) => {
                        return  <CardAppointment key={appointment.id} appointment={appointment}/>
                    }
                    )}

                </div>
            </div>

        </>
    )
}

export default MyAppointments

export default MyAppointments
import CustomDiv from "../styles/CustomDiv";
const CardAppointments = ({appointment:{date,time,status}}) => {

    return (
      <>
      <CustomDiv>
          <h1>FECHA: {date}</h1>
          <h1>HORA: {time}</h1>
          <h1>ESTADO: {status} </h1>
      </CustomDiv>
      </>
    );
  };

  export default CardAppointments;

*/