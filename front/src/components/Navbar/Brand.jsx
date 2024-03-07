import React from "react";
import logo from "../../assets/logo_banco1.png"
import styles from "./Navbar.module.css"
const Brand = () =>{
    return(
    <div className={styles.NavbarBrand}>
        <img src={logo} alt="imagenLogo" />
        <h1>BANK OF SUDAMERICAN</h1>
    </div>
    )
}

export default Brand