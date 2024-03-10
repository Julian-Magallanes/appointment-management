import React from "react";
import logo from "../../assets/logo_banco1.png"
import styles from "./Brand.module.css"
const Brand = () =>{
    return(
    <div className={styles.containerBrand}>
        <img src={logo} alt="imagenLogo" />
        <h1>BANK OF SUDAMERICAN</h1>
    </div>
    )
}

export default Brand