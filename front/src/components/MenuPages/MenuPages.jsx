import React from "react";
import styles from "./MenuPages.module.css"


const MenuPages = () =>{
    return(
    <div className={styles.MenuPagesContainer}>
        <ul>
            <li>Home</li>
            <li>Gestion de Turnos</li>
            <li>Histoorial de Turnos</li>
        </ul>
    </div>
    )
}

export default MenuPages