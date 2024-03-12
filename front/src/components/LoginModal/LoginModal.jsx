import React from "react";
import styles from "./Login.module.css"
import Brand from "../Brand/Brand";
import userIcon from "../../assets/iconUser.png"
import passwordIcon from "../../assets/iconPassword.png"
import ValidateCredential from "../../helpers/ValidateCredential";
import { useState } from "react";
import { Link } from "react-router-dom";


const LoginModal = () =>{
    const [userLogin, setUserLogin]= useState({
        username: "",
        password:"",
    })
    const [errors, setErrors] = useState ({
        username: "",
        password:"",
    })
    const handleInputChange = (event) =>{
        const{name, value} = event.target
        setUserLogin({
            ...userLogin,
            [name]: value
        });
        setErrors (ValidateCredential({
            ...userLogin,
            [name]: value
        }))
    }
    const handleInputSubmit = (event) =>{
        event.preventDefault();
        alert("Usuario logeado")
        setUserLogin({
            username: "",
            password:"",
        })
    }
    return(
    <div className={styles.LoginPosition}>
    <div className={styles.LoginContainer}>
        <div className={styles.LoginBrand}>
        <Brand />
        </div>
        <form className={styles.LoginContainerForm}>
            <div className={styles.LoginContainerFormInputContainer}>
                <label htmlFor="">Usuario</label>
                <div className={styles.LoginContainerFormInput}>
                    <img src={userIcon} alt="userIcon" />
                    <input 
                    type="text"
                    value={userLogin.username}
                    name="username"
                    onChange={handleInputChange}
                    />
                </div>
                <p>{errors.username}</p>
            </div>
            <div className={styles.LoginContainerFormInputContainer}>
                <label htmlFor="">Contraseña</label>
                <div className={styles.LoginContainerFormInput}>  
                    <img src={passwordIcon} alt="passwordIcon" />
                    <input 
                    type="text"
                    value={userLogin.password}
                    name="password"
                    onChange={handleInputChange}
                    
                    />
                </div>
                <p>{errors.password}</p>
            </div>
            <a href="./">¿Olvidaste tu contraseña?</a>
            <div className={styles.LoginContainerFormButtons}>
                <Link to="/Appointments"><input type="submit" value="Iniciar Sesion"className={styles.ButtonDark} disabled={errors.username || errors.password}/></Link>
                <Link to="/Register"><input type="submit" value="Registrarme"className={styles.ButtonLigth}/></Link>
            </div>
        </form>
    </div>
    </div>
    )
}

export default LoginModal