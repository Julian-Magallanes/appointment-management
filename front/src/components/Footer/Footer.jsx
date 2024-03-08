import React from "react";
import styles from "./Footer.module.css"
import iconLkdn from "../../assets/iconLinkedin.png"
import iconGithub from "../../assets/iconGithub.png"
import iconEmail from "../../assets/iconEmail.png"
import iconArrow from "../../assets/iconArrow.png"


const Footer = () =>{
    return(
    <div className={styles.footerContainer}>
        <div>
            <h6>Version 1.1.8</h6>
        </div>
        <div className={styles.footerContainerRrss}>
            <h4>Visita Nuestras Redes Sociales</h4>
            <a href="./"><img src={iconArrow} alt="iconArrow"/></a>
            <a href="./"><img src={iconLkdn} alt="iconLkdn"/></a>
            <a href="./"><img src={iconGithub} alt="iconGithub"/></a>
            <a href="./"><img src={iconEmail} alt="iconEmail"/></a>
        </div>
    </div>
    )
}

export default Footer