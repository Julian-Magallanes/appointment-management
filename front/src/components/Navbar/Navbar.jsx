import React from "react";
import Brand from "../Brand/Brand";
import styles from "./Navbar.module.css"
import MenuNavbar from "./Menu";
import { Link } from "react-router-dom";

const Navbar = () =>{
    return(
    <div className={styles.NavbarContainer}>
        <Brand/>
        <div className={styles.NavbarContainerSearch}>
        <div className={styles.NavbarButtons}>
        <Link to="/Register">
            <button className={styles.ButtonLigth}>Registrarse</button>
        </Link>
        <Link to="/Login">
            <button className={styles.ButtonDark}>Iniciar Sesion</button>
        </Link>
        </div>
            <MenuNavbar/>
        </div>
    </div>
    )
}

export default Navbar