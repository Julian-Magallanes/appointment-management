import React from "react";
import styles from "./RegisterModal.module.css"
import userIcon from "../../assets/iconUser.png"
import passwordIcon from "../../assets/iconPassword.png"
import credIcon from "../../assets/iconCred.png"
import emailIcon from "../../assets/iconEmail2.png"
import phoneIcon from "../../assets/iconPhone.png"
import Navbar from "../../components/Navbar/Navbar";
const RegisterModal = () =>{
    return(
    <div>
        <Navbar/>
        <div className={styles.RegisterContainer}>
            <form action="" className={styles.RegisterContainerForm}>
                <div className={styles.RegisterContainerFormInputContainer}>
                    <label htmlFor="">Usuario</label>
                    <div className={styles.RegisterContainerFormInput}>
                        <img src={userIcon} alt="userIcon" />
                        <input type="text"/>
                    </div>
                </div>
                <div className={styles.RegisterContainerFormInputContainer}>
                    <label htmlFor="">Contraseña</label>
                    <div className={styles.RegisterContainerFormInput}>
                        <img src={passwordIcon} alt="passwordIcon" />
                        <input type="text"/>
                    </div>
                </div>
                <div className={styles.RegisterContainerFormInputContainer}>
                    <label htmlFor="">Repetir Contraseña</label>
                    <div className={styles.RegisterContainerFormInput}>
                        <img src={passwordIcon} alt="passwordIcon" />
                        <input type="text"/>
                    </div>
                </div>
                <div className={styles.RegisterContainerFormInputContainer}>
                    <label htmlFor="">Nombre y Apellido</label>
                    <div className={styles.RegisterContainerFormInput}>
                        <img src={userIcon} alt="passwordIcon" />
                        <input type="text"/>
                    </div>
                </div>
                <div className={styles.RegisterContainerFormInputContainer}>
                    <label htmlFor="">Numero de Documento</label>
                    <div className={styles.RegisterContainerFormInput}>
                        <img src={credIcon } alt="passwordIcon" />
                        <input type="text"/>
                    </div>
                </div>
                <div className={styles.RegisterContainerFormInputContainer}>
                    <label htmlFor="">Email</label>
                    <div className={styles.RegisterContainerFormInput}>
                        <img src={emailIcon} alt="passwordIcon" />
                        <input type="text"/>
                    </div>
                </div>
                <div className={styles.RegisterContainerFormInputContainer}>
                    <label htmlFor="">Telefono</label>
                    <div className={styles.RegisterContainerFormInput}>
                        <img src={phoneIcon} alt="passwordIcon" />
                        <input type="text"/>
                    </div>
                </div>
                <div className={styles.RegisterContainerFormCheckbox}>
                    <input type="checkbox" id="checkboxInput" className={styles.checkboxInput}/>
                    <label><a href="./">Acepto terminos y Condiciones</a></label>
                </div>
                <div>
                    <input type="submit" value="Registrarme" className={styles.ButtonLigth}/>
                </div>
            </form>
        </div>
    </div>
    )
}

export default RegisterModal