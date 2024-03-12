import React from "react";
import styles from "./MenuPages.module.css"
import { Link } from "react-router-dom";

const MenuPages = () =>{
    return(
    <div className={styles.MenuPagesContainer}>
        <ul>
            <Link to="/">
                <li>Home</li>
            </Link>
            <Link to="/Appointments">
                <li>Gestion de Turnos</li>
            </Link>
            <Link to="/History">
                <li>Historial de Turnos</li>
            </Link>
        </ul>
    </div>
    )
}

export default MenuPages