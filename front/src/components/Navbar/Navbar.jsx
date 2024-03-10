import React from "react";
import Brand from "../Brand/Brand";
import ButtonsNavbar from "./ButtonsNavbar";
import styles from "./Navbar.module.css"
import MenuNavbar from "./Menu";

const Navbar = () =>{
    return(
    <div className={styles.NavbarContainer}>
        <Brand/>
        <div className={styles.NavbarContainerSearch}>
            <ButtonsNavbar/>
            <MenuNavbar/>
        </div>
    </div>
    )
}

export default Navbar