import React from "react";
import Brand from "../Brand/Brand";
import styles from "./Navbar.module.css"
import MenuNavbar from "./Menu";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const Navbar = () =>{
    const login = useSelector(state => state?.loginUser?.userData?.user);
    return(
    <div className={styles.NavbarContainer}>
        <Brand/>
        <div className={styles.NavbarContainerSearch}>
        <div className={styles.NavbarButtons}>
        {!login && <Link to="/Register">
            <button className={styles.ButtonLigth}>Registrarse</button>
        </Link>}
        {!login && <Link to="/Login">
            <button className={styles.ButtonDark}>Iniciar Sesion</button>
        </Link>}
        
        </div>
            <MenuNavbar/>
        </div>
    </div>
    )
}

export default Navbar