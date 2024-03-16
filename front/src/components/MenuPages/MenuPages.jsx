import React from "react";
import styles from "./MenuPages.module.css"
import { NavLink } from "react-router-dom";

const MenuPages = () =>{
    return(
    <div className={styles.MenuPagesContainer}>
        <ul>
            <li>
                <NavLink  to="/" activeClassName={styles.active}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/Appointments" activeClassName={styles.active}>
                    Gestion de Turnos
                </NavLink>
            </li>
            <li>
                <NavLink to="/History" activeClassName={styles.active}>
                    Historial de Turnos
                </NavLink>
            </li>
        </ul>
    </div>
    )
}

export default MenuPages