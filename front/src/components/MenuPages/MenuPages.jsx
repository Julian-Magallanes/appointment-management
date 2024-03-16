import React from "react";
import styles from "./MenuPages.module.css"
import { NavLink } from "react-router-dom";

const MenuPages = () =>{
    return(
    <div className={styles.MenuPagesContainer}>
        <ul>
            <li>
                <NavLink  to="/" >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/Appointments" >
                    Gestion de Turnos
                </NavLink>
            </li>
            <li>
                <NavLink to="/History" >
                    Historial de Turnos
                </NavLink>
            </li>
        </ul>
    </div>
    )
}

export default MenuPages