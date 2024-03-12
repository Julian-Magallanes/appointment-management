import React from "react";
import styles from "./Navbar.module.css"
import { Link } from "react-router-dom";
const ButtonsNavbar = () =>{
    return(
    <div className={styles.NavbarButtons}>
        <Link to="/Register">
            <button className={styles.ButtonLigth}>Registrarse</button>
        </Link>
        <Link>
            <button className={styles.ButtonDark}>Iniciar Sesion</button>
        </Link>
    </div>
    )
}

export default ButtonsNavbar