import React from "react";
import { useState , useEffect} from "react";
import styles from "./MyTurns.module.css"
import axios from 'axios'
import Brand from "../../components/Brand/Brand";
import MenuPages from "../../components/MenuPages/MenuPages";
import {  useDispatch, useSelector } from "react-redux";
import { setUserAppointments } from "../../redux/usersSlice";

function MyTurns() {
    const actualUserId = useSelector(state => state.loginUser?.userData?.user?.id);
    const appointments = useSelector(state =>state.loginUser.userAppoinments)
    console.log(appointments);
    const dispatch = useDispatch();
    console.log(actualUserId);
    useEffect(()=>{
        axios
        .get('http://localhost:3000/users/' + actualUserId) 
        .then((response) =>response.data.appointments)
        .then(dataAppointments =>dispatch(setUserAppointments(dataAppointments)))
        .catch((error) =>console.log('Error en peticion a axios:'(error.message)));
            
        },[actualUserId, appointments.length, dispatch])
    const handleCancelAppointmentId = (appointmentId) => {
        
        axios
        .put('http://localhost:3000/appointments/cancel/' + appointmentId)
        .then((response) =>response.data)
        .then(data =>{
            axios
            .get('http://localhost:3000/users/' + actualUserId) 
            .then((response) =>response.data.appointments)
            .then(dataAppointments =>dispatch(setUserAppointments(dataAppointments)))
            .catch((error) =>console.log('Error en peticion a axios:'(error.message)))
        }
        )
        .catch((error) =>console.log('Error en peticion a put axios:'(error.message)))
    }
return (
    <div>
       <div className={styles.MyTurnsBrand}>
            <Brand/>
            <MenuPages/>
        </div>
        <div className={styles.MyTurnsTable}>
            <table className={styles.MyTurnsContainer}> 
                <thead> 
                    <tr>
                        <th>
                            <h4>Fecha de Turno</h4>
                        </th>
                        <th>
                            <h4>Horario</h4>
                        </th>
                        <th>
                            <h4>Tipo de atención</h4>
                        </th>
                        <th>
                            <h4>Sucursal</h4>
                        </th>
                        <th>
                            <h4>Estado de turno</h4>
                        </th>
                    </tr>
                </thead>
                <tbody> 
                    {appointments.length ?
                    appointments.map((turn) => (
                        <tr key={turn.id}>
                            <td>
                                <p>{turn.date}</p>
                            </td>
                            <td>
                                <p>{turn.time}</p>
                            </td>
                            <td>
                                <p>{turn.description}</p>
                            </td>
                            <td>
                                <p>{turn.place}</p>
                            </td>
                            <td>
                                <span onClick={() => handleCancelAppointmentId(turn.id)}>{turn.status}</span>
                            </td>
                        </tr>
                    )) : <p>No hay reservas</p>}
                </tbody>
            </table>
        </div>
    </div>
    )
}
            
export default MyTurns
