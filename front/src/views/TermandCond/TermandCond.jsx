import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./TermandCond.module.css"
import arrowIcon from "../../assets/iconArrow.png"
import { Link } from "react-router-dom";
const TermandCond = () =>{
    return(
    <div className={styles.TermsContainer}>
        <Navbar/>
        <div className={styles.TermsTextsContainer}>
            <h2>Términos y Condiciones para el <br />Registro de Banco</h2>
            <ul className={styles.TermsTexts}>
                <li>1. Aceptación de Términos y Condiciones: Al utilizar nuestros servicios de registro bancario, el cliente acepta y se compromete a cumplir con los siguientes términos y condiciones.</li>
                <li>2. Información del Usuario: El usuario se compromete a proporcionar información precisa y actualizada durante el proceso de registro. El banco no se hace responsable de la veracidad de la información proporcionada por el usuario.</li>
                <li>3. Seguridad de la Cuenta: El usuario es responsable de mantener la confidencialidad de su información de cuenta, incluyendo contraseñas y datos de acceso. Cualquier actividad realizada con las credenciales de la cuenta del usuario se considerará como realizada por el propio usuario.</li>
                <li>4. Uso Autorizado: Los servicios ofrecidos por el banco a través del registro están destinados únicamente para uso personal y no comercial. El usuario acepta no utilizar los servicios de manera ilegal o para actividades fraudulentas.</li>
                <li>5. Protección de Datos: El banco se compromete a proteger la privacidad y seguridad de la información del usuario de acuerdo con las leyes de protección de datos aplicables. Se recomienda revisar la política de privacidad para obtener información detallada sobre la recopilación y el uso de datos.</li>
                <li>6. Actualización de Información: El usuario se compromete a informar al banco de cualquier cambio en la información proporcionada durante el registro. El banco no se hace responsable de problemas derivados de información desactualizada.</li>
                <li>7. Suspensión o Terminación de Servicios: El banco se reserva el derecho de suspender o terminar los servicios de registro en caso de violación de estos términos y condiciones, o por razones de seguridad.</li>
                <li>8. Modificaciones en los Términos y Condiciones: El banco se reserva el derecho de modificar estos términos y condiciones en cualquier momento. Los cambios serán notificados a los usuarios a través de medios apropiados.</li>
                <li>9. Ley Aplicable: Estos términos y condiciones están sujetos a las leyes vigentes en calle Siempre Viva 123. Cualquier disputa se resolverá de acuerdo con estas leyes.</li>
                <li>10. Contacto: Para cualquier pregunta o inquietud relacionada con estos términos y condiciones, los usuarios pueden ponerse en contacto con 2612111122254.</li>
            </ul>
        </div>
            <Link to="/Register">
                <div className={styles.BtnBack}>
                    <img src={arrowIcon} alt="arrowIcon" />
                    <p>Volver a Registro</p>
                </div>
            </Link>
    </div>
)
}

export default TermandCond