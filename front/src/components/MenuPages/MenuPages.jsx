import React from "react";
import styles from "./MenuPages.module.css"
import { NavLink, Link } from "react-router-dom";

const MenuPages = (props) =>{
    
    return(
    <div className={styles.MenuPagesContainer}>
        <ul>
            <li>
                <Link  to="../" >
                    <span>Home</span>
                </Link>
            </li>
            <li>
                <NavLink to="/Appointments" className={({isActive}) => isActive && styles.active}>
                    <span>Gestion de Turnos</span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/History" className={({isActive}) => isActive && styles.active}>
                    <span>Historial de Turnos</span>
                </NavLink>
            </li>
        </ul>
    </div>
    )
}

export default MenuPages