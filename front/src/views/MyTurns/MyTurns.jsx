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
