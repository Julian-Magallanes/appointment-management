import React from "react";
import logo from "../../assets/logo_banco1.png"
import styles from "./Brand.module.css"
import { Link } from "react-router-dom";
const Brand = () =>{
    return(
    <Link to="/">
        <div className={styles.containerBrand}>
            <img src={logo} alt="imagenLogo" />
            <h1>BANK OF SUDAMERICAN</h1>
        </div>
    </Link>
    )
}

export default Brand