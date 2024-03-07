import React from "react";
import styles from "./Navbar.module.css"
import menuNavbarImage from "../../assets/iconMenu.png"
const MenuNavbar = () =>{
    return(
    <div className={styles.NavbarMenu}>
        <img src={menuNavbarImage} alt="menuIcon" />
    </div>
    )
}

export default MenuNavbar