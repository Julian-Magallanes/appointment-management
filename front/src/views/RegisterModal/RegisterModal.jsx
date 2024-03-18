import React from "react";
import styles from "./RegisterModal.module.css"
import userIcon from "../../assets/iconUser.png"
import passwordIcon from "../../assets/iconPassword.png"
import credIcon from "../../assets/iconCred.png"
import emailIcon from "../../assets/iconEmail2.png"
import phoneIcon from "../../assets/iconPhone.png"
import Navbar from "../../components/Navbar/Navbar";
import { useState } from "react";
import ValidateUser from "../../helpers/ValidateUser";
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const RegisterModal = () =>{
const navigate = useNavigate();
const initialState = {
    username: "",
    password:"",
    passwordValidate: "",
    name:"",
    nDni:"",
    email:"",
    phone:"",
    check:"",
    }

const [userRegister, setUserRegister]= useState(initialState)
const [errors, setErrors] = useState (initialState)
const handleInputChange = (event) =>{
    const{name, value} = event.target
    setUserRegister({
        ...userRegister,
        [name]: value,
    });
    setErrors (ValidateUser({
        ...userRegister,
        [name]: value
    }))
}
const handleInputSubmit = (event) =>{
    event.preventDefault();

    if (userRegister.password !== userRegister.passwordValidate) {
        setErrors({ ...errors, passwordValidate: "La contraseña ingresada no coincide con la contraseña anterior" });
        return; // Detiene el proceso de registro si las contraseñas no coinciden
    }
    
    axios.post("http://localhost:3000/users/register",userRegister)
    .then(({data})=>data)
    .then((userDB) => {
        Swal.fire({
        title: "Usuario creado",
        text: `Se a creado el usuario ${userDB.name}!`,
        icon: "success",
        showConfirmButton:false
      });
    setUserRegister({ 
    username: "",
    password:"",
    name:"",
    nDni:"",
    email:"",
    phone:""
    }
    )
    navigate("/Login")
    })
    .catch ((error) => alert(`Error al crear el usuario: ${error}`))
}
    return(
    <div>
        <Navbar/>
        <div className={styles.RegisterContainer}>
            <form onSubmit={handleInputSubmit} className={styles.RegisterContainerForm}>
                <div className={styles.RegisterContainerFormInputContainer}>
                    <label htmlFor="">Usuario</label>
                    <div className={styles.RegisterContainerFormInput}>
                        <img src={userIcon} alt="userIcon" />
                        <input 
                        type="text"
                        value={userRegister.username}
                        name="username"
                        onChange={handleInputChange}
                        />
                    </div>
                    <p>{errors.username}</p>
                </div>
                <div className={styles.RegisterContainerFormInputContainer}>
                    <label htmlFor="">Contraseña</label>
                    <div className={styles.RegisterContainerFormInput}>
                        <img src={passwordIcon} alt="passwordIcon" />
                        <input 
                        type="password"
                        value={userRegister.password}
                        name="password"
                        onChange={handleInputChange}
                        />
                    </div>
                    <p>{errors.password}</p>
                </div>
                <div className={styles.RegisterContainerFormInputContainer}>
                    <label htmlFor="">Repetir Contraseña</label>
                    <div className={styles.RegisterContainerFormInput}>
                        <img src={passwordIcon} alt="passwordIcon" />
                        <input 
                        type="password"
                        value={userRegister.passwordValidate}
                        name="passwordValidate"
                        onChange={handleInputChange}
                        />
                    </div>
                    <p>{errors.passwordValidate}</p>
                </div>
                <div className={styles.RegisterContainerFormInputContainer}>
                    <label htmlFor="">Nombre y Apellido</label>
                    <div className={styles.RegisterContainerFormInput}>
                        <img src={userIcon} alt="passwordIcon" />
                        <input 
                        type="text"
                        value={userRegister.name}
                        name="name"
                        onChange={handleInputChange}
                        />
                    </div>
                    <p>{errors.name}</p>
                </div>
                <div className={styles.RegisterContainerFormInputContainer}>
                    <label htmlFor="">Numero de Documento</label>
                    <div className={styles.RegisterContainerFormInput}>
                        <img src={credIcon } alt="passwordIcon" />
                        <input 
                        type="number"
                        value={userRegister.nDni}
                        name="nDni"
                        onChange={handleInputChange}
                        />
                    </div>
                    <p>{errors.nDni}</p>
                </div>
                <div className={styles.RegisterContainerFormInputContainer}>
                    <label htmlFor="">Email</label>
                    <div className={styles.RegisterContainerFormInput}>
                        <img src={emailIcon} alt="passwordIcon" />
                        <input 
                        type="email"
                        value={userRegister.email}
                        name="email"
                        onChange={handleInputChange}
                        />
                    </div>
                    <p>{errors.email}</p>
                </div>
                <div className={styles.RegisterContainerFormInputContainer}>
                    <label htmlFor="">Telefono</label>
                    <div className={styles.RegisterContainerFormInput}>
                        <img src={phoneIcon} alt="passwordIcon" />
                        <input 
                        type="number"
                        value={userRegister.phone}
                        name="phone"
                        onChange={handleInputChange}
                        />
                    </div>
                    <p>{errors.phone}</p>
                </div>
                <div className={styles.RegisterContainerFormCheckbox}>
                    <div className={styles.RegisterFormCheckbox}>
                        <input 
                        type="checkbox" 
                        id="checkboxInput" 
                        className={styles.checkboxInput}
                        checked={userRegister.check}
                        name="check"
                        onChange={handleInputChange}
                        />
                        <label><Link to="/Terms">Acepto terminos y Condiciones</Link></label>
                    </div>
                    <div>
                        <p>{errors.check}</p>
                    </div>
                </div>

                <div>
                    <input type="submit" value="Registrarme" className={styles.ButtonLigth} />
                </div>
            </form>
        </div>
    </div>
    )
}

export default RegisterModal