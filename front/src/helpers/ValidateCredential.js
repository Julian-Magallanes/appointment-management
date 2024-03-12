export default function ValidateCredential(userLogin){
    const errors = {}
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).+$/;
    if(!userLogin.username)errors.username = "Debe ingresar un nombre de usuario";
    else{
        if(userLogin.username.length < 5) errors.username="El usuario debe contener mas de 5 caracteres"
        if(userLogin.username.length > 20) errors.username="El usuario debe contener menos de 20 caracteres"
    }
    if(!userLogin.password)errors.password = "Debe ingresar una contraseña";
    else{
        if(!passwordRegex.test(userLogin.password))errors.password = "La contraseña debe tener al menos una mayuscula y un numero";
    }
    
    return errors;
}