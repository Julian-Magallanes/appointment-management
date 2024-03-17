import React from "react"
import styles from "./PagesConstruction.module.css"
import { Link } from "react-router-dom"
function PagesConstruction() {
    return(
        <div className={styles.Container}>
            <h1>Pagina en construccion.</h1>
            <Link to="/">
                <button className={styles.ButtonDark}>Volver al Home</button>
            </Link>
        </div>
    )
}
export default PagesConstruction
