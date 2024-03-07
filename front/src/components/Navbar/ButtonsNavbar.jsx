import React from "react";
import styles from "./Navbar.module.css"
const ButtonsNavbar = () =>{
    return(
    <div className={styles.NavbarButtons}>
        <button className={styles.ButtonLigth}>Registrarse</button>
        <button className={styles.ButtonDark}>Iniciar Sesion</button>
    </div>
    )
}

export default ButtonsNavbar