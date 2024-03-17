import React, { useState, useEffect} from "react";
import styles from "./PostTurns.module.css"
import Brand from "../../components/Brand/Brand";
import MenuPages from "../../components/MenuPages/MenuPages";
import dateIcon from "../../assets/iconDate.png"
import timeIcon from "../../assets/iconTime.png"
import timeUser from "../../assets/iconUser2.png"
import placeUser from "../../assets/iconPlace.png"
import { useNavigate } from "react-router-dom";
import ValidateAppointments from "../../helpers/ValidateAppointment";
import { useSelector } from "react-redux";
import axios from "axios";
import Swal from 'sweetalert2'
const PostTurn = () =>{
    const initialState = {
    date: "",
    time:"",
    description: "",
    place:"",
    }

    const navigate = useNavigate();
        
        
    const [userAppointment, setUserAppointment]= useState(initialState)
    const [errors, setErrors] = useState (initialState)
    const handleInputChange = (event) =>{
        const{name, value} = event.target
        setUserAppointment({
            ...userAppointment,
            [name]: value,
        });
        setErrors (ValidateAppointments({
            ...userAppointment,
            [name]: value
        }))
    }
    const userId = useSelector(state => state.loginUser?.userData?.user?.id)
    const handleInputSubmit = (event) =>{
        event.preventDefault();
        const newAppointment = {
            ...userAppointment, userId
        }
        axios.post("http://localhost:3000/appointments/schedule",newAppointment)
        .then(({data})=>data)
        .then((appointmentDB) => {
            Swal.fire({
            title: "Se a creado un turno",
            text: `el dia: ${appointmentDB.date} a las ${appointmentDB.time}!`,
            icon: "success"
          });
        setUserAppointment(initialState)
        navigate("/History")
        })
        .catch ((error) => alert("Error al crear el turno:" ,error))
    }

    return(
    <div >
        <div className={styles.PostTurnsBrand}>
        <Brand />
        <MenuPages/>
        </div>
        <div className={styles.PostTurnsContainer}>
        <form className={styles.PostTurnsContainerForm} onSubmit={handleInputSubmit}>
            <div className={styles.PostTurnsContainerFormInputContainer}>
                <div className={styles.PostTurnsContainerFormInputText}>
                <img src={dateIcon} alt="userIcon" />
                <label htmlFor="dateInput">Fecha de Turno</label>
                </div>
                <div className={styles.PostTurnsContainerFormInput}>
                    <input 
                    type="date" 
                    onChange={handleInputChange}
                    name="date"
                    value={userAppointment.date}
                    />
                </div>
                <p>{errors.date}</p>
            </div>
            <div className={styles.PostTurnsContainerFormInputContainer}>
                <div className={styles.PostTurnsContainerFormInputText}>
                <img src={timeIcon} alt="passwordIcon" />
                <label htmlFor="timeSelect">Horario</label>
                </div>
                <div className={styles.PostTurnsContainerFormInput}>  
                    <select 
                    name="time" 
                    onChange={handleInputChange}
                    value={userAppointment.time}
                    >
                        <option value="">Elije en la lista</option>
                        <option value="8:00">8:00</option>
                        <option value="8:30">8:30</option>
                        <option value="9:00">9:00</option>
                        <option value="9:30">9:30</option>
                        <option value="10:00">10:00</option>
                        <option value="10:30">10:30</option>
                        <option value="11:30">11:30</option>
                        <option value="12:00">12:00</option>
                        <option value="12:30">12:30</option>
                    </select>
                </div>
                <p>{errors.time}</p>
            </div>
            <div className={styles.PostTurnsContainerFormInputContainer}>
                <div className={styles.PostTurnsContainerFormInputText}>
                <img src={timeUser} alt="passwordIcon" />
                <label htmlFor="descriptionSelect">Tipo de atencion</label>
                </div>
                <div className={styles.PostTurnsContainerFormInput}>  
                    <select 
                    name="description" 
                    onChange={handleInputChange}
                    value={userAppointment.description}
                    >
                        <option value="">Elije en la lista</option>
                        <option value="Solicitud de prestamo">Solicitud de prestamo</option>
                        <option value="Retiro en caja">Retiro en caja</option>
                        <option value="Solicitud tarjeta">Solicitud tarjeta</option>
                        <option value="Operaciones Varias">Operaciones Varias</option>
                    </select>
                </div>
                <p>{errors.description}</p>
            </div>
            <div className={styles.PostTurnsContainerFormInputContainer}>
                <div className={styles.PostTurnsContainerFormInputText}>
                <img src={placeUser} alt="passwordIcon" />
                <label htmlFor="placeSelect">Sucursal</label>
                </div>
                <div className={styles.PostTurnsContainerFormInput}>  
                    <select 
                    name="place"  
                    onChange={handleInputChange}
                    value={userAppointment.place}
                    >
                        <option value="">Elije en la lista</option>
                        <option value="Balcarce 272, Godoy Cruz">Balcarce 272, Godoy Cruz</option>
                        <option value="Dorrego 586, Guaymallen">Dorrego 586, Guaymallen</option>
                        <option value="Independencia 586, Las Heras">Independencia 586, Las Heras</option>
                        <option value="Luzuriaga 102, Lujan de Cuyo">Luzuriaga 102, Lujan de Cuyo</option>
                    </select>
                </div>
                <p>{errors.place}</p>
            </div>
            <div className={styles.PostTurnsContainerFormButtons}>
                <input type="submit" value="Reservar Turno"className={styles.ButtonDark} disabled={errors.date || errors.time || errors.description || errors.place}/>
                <input type="reset" value="Limpiar Formulario"className={styles.ButtonLigth}/>
            </div>
        </form>
        </div>
    </div>
    )
}

export default PostTurn