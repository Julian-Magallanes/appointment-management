import React from "react";
import styles from "./MenuPages.module.css"
import { NavLink, Link } from "react-router-dom";

const MenuPages = () =>{
    
    return(
    <div className={styles.MenuPagesContainer}>
        <ul>
            <li>
                <Link  to="../" >
                    <span>Home</span>
                </Link>
            </li>
            <li>
                <NavLink to="/Appointments" className={window.location.pathname === '/Appointments' ? styles.active : ''}>
                    <span>Gestion de Turnos</span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/History" className={window.location.pathname === '/History' ? styles.active : ''}>
                    <span>Historial de Turnos</span>
                </NavLink>
            </li>
        </ul>
    </div>
    )
}

export default MenuPages