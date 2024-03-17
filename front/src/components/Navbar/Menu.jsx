import React from "react";
import styles from "./Navbar.module.css"
import menuNavbarImage from "../../assets/iconMenu.png"
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const MenuNavbar = () =>{
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [menuAnimation, setMenuAnimation] = useState(false);
    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
        setMenuAnimation(!menuAnimation);
    };
    const login = useSelector(state => state?.loginUser?.userData?.user);
    return(
    <div className={styles.NavbarMenu}>
      
        <div className={styles.ToggleIcon} onClick={() => toggleDropdown()}>
            <div className={`${styles.NavbarMenuIcon1} ${menuAnimation ? styles.Animation : ''}`} ></div>
            <div className={`${styles.NavbarMenuIcon2} ${menuAnimation ? styles.Animation : ''}`} ></div>
            <div className={`${styles.NavbarMenuIcon3} ${menuAnimation ? styles.Animation : ''}`}></div>
        </div>
        <ul className={`${styles.NavbarDropdown} ${dropdownVisible ? styles.Visible : ''}`}>
            {!login && <li className={styles.Red}>Logeate y empieza a utilizar la app</li>}
            {login && <NavLink to="/Appointments">
                <span>Gestion de Turnos</span>
            </NavLink>}
            {login &&<NavLink to="/History">
                <span>Historial de Turnos</span>
            </NavLink>}
            <NavLink to="/PagesConstruction">
                <span >Preguntas Frecuentes</span>
            </NavLink>
        </ul>
    </div>
    )
}

export default MenuNavbar