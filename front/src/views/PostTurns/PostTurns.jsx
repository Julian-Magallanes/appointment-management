import React from "react";
import styles from "./PostTurns.module.css"
import Brand from "../../components/Brand/Brand";
import MenuPages from "../../components/MenuPages/MenuPages";
import dateIcon from "../../assets/iconDate.png"
import timeIcon from "../../assets/iconTime.png"
import timeUser from "../../assets/iconUser2.png"
import placeUser from "../../assets/iconPlace.png"

const PostTurn = () =>{
    return(
    <div >
        <div className={styles.PostTurnsBrand}>
        <Brand />
        <MenuPages/>
        </div>
        <div className={styles.PostTurnsContainer}>
        <form className={styles.PostTurnsContainerForm}>
            <div className={styles.PostTurnsContainerFormInputContainer}>
                <div className={styles.PostTurnsContainerFormInputText}>
                <img src={dateIcon} alt="userIcon" />
                <label htmlFor="">Fecha de Turno</label>
                </div>
                <div className={styles.PostTurnsContainerFormInput}>
                    <input type="text"/>
                </div>
            </div>
            <div className={styles.PostTurnsContainerFormInputContainer}>
                <div className={styles.PostTurnsContainerFormInputText}>
                <img src={timeIcon} alt="passwordIcon" />
                <label htmlFor="">Horario</label>
                </div>
                <div className={styles.PostTurnsContainerFormInput}>  
                    <select name="form-select" id="formDate" defaultValue="">
                        <option disabled>Elije en la lista</option>
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
            </div>
            <div className={styles.PostTurnsContainerFormInputContainer}>
                <div className={styles.PostTurnsContainerFormInputText}>
                <img src={timeUser} alt="passwordIcon" />
                <label htmlFor="">Tipo de atencion</label>
                </div>
                <div className={styles.PostTurnsContainerFormInput}>  
                    <select name="form-select" id="formDate" defaultValue="">
                        <option disabled>Elije en la lista</option>
                        <option value="Solicitud de prestamo">Solicitud de prestamo</option>
                        <option value="Retiro en caja">Retiro en caja</option>
                        <option value="Solicitud tarjeta">Solicitud tarjeta</option>
                        <option value="Operaciones Varias">Operaciones Varias</option>
                    </select>
                </div>
            </div>
            <div className={styles.PostTurnsContainerFormInputContainer}>
                <div className={styles.PostTurnsContainerFormInputText}>
                <img src={placeUser} alt="passwordIcon" />
                <label htmlFor="">Sucursal</label>
                </div>
                <div className={styles.PostTurnsContainerFormInput}>  
                    <select name="form-select" id="formDate" defaultValue="">
                        <option disabled>Elije en la lista</option>
                        <option value="Balcarce 272, Godoy Cruz">Balcarce 272, Godoy Cruz</option>
                        <option value="Dorrego 586, Guaymallen">Dorrego 586, Guaymallen</option>
                        <option value="Independencia 586, Las Heras">Independencia 586, Las Heras</option>
                        <option value="Luzuriaga 102, Lujan de Cuyo">Luzuriaga 102, Lujan de Cuyo</option>
                    </select>
                </div>
            </div>
            <div className={styles.PostTurnsContainerFormButtons}>
                <input type="submit" value="Reservar Turno"className={styles.ButtonDark}/>
                <input type="submit" value="Limpiar Formulario"className={styles.ButtonLigth}/>
            </div>
        </form>
        </div>
    </div>
    )
}

export default PostTurn