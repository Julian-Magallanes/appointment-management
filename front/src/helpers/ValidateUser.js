export default function ValidateUser (userRegister){
    const errors = {}
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).+$/;
    const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+\s[A-Za-zÁÉÍÓÚáéíóúÑñ]+$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const phoneRegex = /^\+?\d{1,4}?[-.\s]?\(?[0-9]*\)?[-.\s]?\d{1,}$/;
    const dniRegex = /^\d{8}$/

    if(!userRegister.username)errors.username = "Debe ingresar un nombre de usuario";
    else{
        if(userRegister.username.length < 5) errors.username="El usuario debe contener mas de 5 caracteres"
        if(userRegister.username.length > 20) errors.username="El usuario debe contener menos de 20 caracteres"
    }

    if(!userRegister.password)errors.password = "Debe ingresar una contraseña";
    else{
        if(!passwordRegex.test(userRegister.password))errors.password = "La contraseña debe tener al menos una mayuscula y un numero";
    }
    
    if(userRegister.password !== userRegister.passwordValidate) errors.passwordValidate = "La contraseña ingresada no coincide con la contraseña anterior";

    if(!userRegister.name)errors.name = "Debe ingresar su nombre y apellido tal como figura en el dni";
    else{
        if(!nameRegex.test(userRegister.name))errors.name = "El nombre no puede tener numeros, y debe contener nombre + apellido"
    }

    if(!userRegister.nDni)errors.nDni = "Debe ingresar el numero que figura en el dni";
    else{
        if(!dniRegex.test(userRegister.nDni))errors.nDni = "El numero de dni debe contener 8 numeros"
    }

    if(!userRegister.email)errors.email = "Debe ingresar su email";
    else{
        if(!emailRegex.test(userRegister.email))errors.email = "Debe ingresar un fomato de dni valido ejemplo@ejemplo.com"
    }

    if(!userRegister.password)errors.phone = "Debe ingresa numero de telefono";
    else{
        if(!phoneRegex.test(userRegister.phone))errors.phone = "Debe ingresar un telefono valido con 10 numero, ejemplo: 2613012708"
    }

    if(!userRegister.check == true)errors.check = "Debe aceptar los terminos y condiciones";

    return errors;
}