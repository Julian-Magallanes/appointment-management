import React from "react";
import styles from "./Login.module.css"
import Brand from "../../components/Brand/Brand";
import userIcon from "../../assets/iconUser.png"
import passwordIcon from "../../assets/iconPassword.png"
import ValidateCredential from "../../helpers/ValidateCredential";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserData } from "../../redux/usersSlice";
import Home from "../Home/Home";
import axios from "axios";


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
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleInputSubmit = (event) =>{
        event.preventDefault();
        axios.post("http://localhost:3000/users/login",userLogin)
    .then(response=>response.data)
    .then(data => {
        
        dispatch (setUserData(data))
        alert(`Usuario logeado ${data.user.name}`)

        navigate("../History")
    })
    .catch ((error) => alert("Acceso denegado:" ,error))
      
    }
    return(
    <div> 
        <Home/>
        <div className={styles.LoginPosition}>
            <div className={styles.LoginContainer}>
                <div className={styles.LoginBrand}>
                <Brand />
                </div>
                <h2>Inicia Sesión</h2>
                <form onSubmit={handleInputSubmit} className={styles.LoginContainerForm}>
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
                        <input type="submit" value="Iniciar Sesion"className={styles.ButtonDark} disabled={errors.username || errors.password}/>
                        <Link to="/Register"><input type="submit" value="Registrarme"className={styles.ButtonLigth}/></Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}

export default LoginModal