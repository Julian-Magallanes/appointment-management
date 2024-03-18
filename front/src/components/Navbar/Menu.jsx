import React from "react";
import styles from "./Navbar.module.css"
import { useState } from "react";
import {NavLink } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { setUserData } from "../../redux/usersSlice";
import iconVector from "../../assets/iconVector2.png"
import Swal from 'sweetalert2'
const MenuNavbar = () =>{
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [menuAnimation, setMenuAnimation] = useState(false);
    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
        setMenuAnimation(!menuAnimation);
    };
    const login = useSelector(state => state?.loginUser?.userData?.user);
    const dispatch = useDispatch();
    
    const closeLogin = () =>{
        
        dispatch(setUserData({}))
        Swal.fire({
            title: "Cerro Sesion exitosamente",
            icon: "success",
            timer: 1500,
            showConfirmButton:false
          });
    }
    return(
    <div className={styles.NavbarMenu}>
      
        {!login && <div className={styles.ToggleIcon} onClick={() => toggleDropdown()}>
            <div className={`${styles.NavbarMenuIcon1} ${menuAnimation ? styles.Animation : ''}`} ></div>
            <div className={`${styles.NavbarMenuIcon2} ${menuAnimation ? styles.Animation : ''}`} ></div>
            <div className={`${styles.NavbarMenuIcon3} ${menuAnimation ? styles.Animation : ''}`}></div>
        </div>}
        {login && <button className={styles.ButtonDark2} onClick={() => toggleDropdown()}>{login.name} <img src={iconVector} alt="iconVector" /></button>}
        <ul className={`${styles.NavbarDropdown} ${dropdownVisible ? styles.Visible : ''}`}>
            {!login && <NavLink to="/Login">
                <li className={styles.Red}>Logeate y empieza a utilizar la app</li>
            </NavLink>}
            {login && <NavLink to="/Appointments">
                <span>Gestion de Turnos</span>
            </NavLink>}
            {login &&<NavLink to="/History">
                <span>Historial de Turnos</span>
            </NavLink>}
            <NavLink to="/PagesConstruction">
                <span >Preguntas Frecuentes</span>
            </NavLink>
            {login &&
            
                <span className={styles.Red} onClick={closeLogin}>Cerrar Sesion</span>
            }
        </ul>
    </div>
    )
}

export default MenuNavbar