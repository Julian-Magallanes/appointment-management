import React from "react";
import styles from "./Login.module.css"
import Brand from "../Brand/Brand";
import userIcon from "../../assets/iconUser.png"
import passwordIcon from "../../assets/iconPassword.png"

const LoginModal = () =>{
    return(
    <div className={styles.LoginPosition}>
    <div className={styles.LoginContainer}>
        <div className={styles.LoginBrand}>
        <Brand />
        </div>
        <form className={styles.LoginContainerForm}>
            <div className={styles.LoginContainerFormInputContainer}>
                <label htmlFor="">Usuario</label>
                <div className={styles.LoginContainerFormInput}>
                    <img src={userIcon} alt="userIcon" />
                    <input type="text"/>
                </div>
            </div>
            <div className={styles.LoginContainerFormInputContainer}>
                <label htmlFor="">Contraseña</label>
                <div className={styles.LoginContainerFormInput}>  
                    <img src={passwordIcon} alt="passwordIcon" />
                    <input type="text"/>
                </div>
            </div>
            <a href="./">¿Olvidaste tu contraseña?</a>
            <div className={styles.LoginContainerFormButtons}>
                <input type="submit" value="Iniciar Sesion"className={styles.ButtonDark}/>
                <input type="submit" value="Registrarme"className={styles.ButtonLigth}/>
            </div>
        </form>
    </div>
    </div>
    )
}

export default LoginModal