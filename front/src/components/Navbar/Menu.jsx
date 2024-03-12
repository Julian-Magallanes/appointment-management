import React from "react";
import styles from "./Navbar.module.css"
import menuNavbarImage from "../../assets/iconMenu.png"
import { useState } from "react";
import { Link } from "react-router-dom";
const MenuNavbar = () =>{
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [menuAnimation, setMenuAnimation] = useState(false);
    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
        setMenuAnimation(!menuAnimation);
    };
    return(
    <div className={styles.NavbarMenu}>
      
        <div className={styles.ToggleIcon} onClick={() => toggleDropdown()}>
            <div className={`${styles.NavbarMenuIcon1} ${menuAnimation ? styles.Animation : ''}`} ></div>
            <div className={`${styles.NavbarMenuIcon2} ${menuAnimation ? styles.Animation : ''}`} ></div>
            <div className={`${styles.NavbarMenuIcon3} ${menuAnimation ? styles.Animation : ''}`}></div>
        </div>
        <ul className={`${styles.NavbarDropdown} ${dropdownVisible ? styles.Visible : ''}`}>
            <Link to="/Appointments">
                <li>Gestion de Turnos</li>
            </Link>
            <Link to="/History">
                <li>Historial de Turnos</li>
            </Link>
            <Link to="/History">
                <li>Preguntas Frecuentes</li>
            </Link>
        </ul>
    </div>
    )
}

export default MenuNavbar