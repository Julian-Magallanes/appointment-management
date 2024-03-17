module.exports = (req, res, next) => {
    const { name, email, phone, nDni, username, password } = req.body;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).+$/;
    const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+\s[A-Za-zÁÉÍÓÚáéíóúÑñ]+$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const phoneRegex = /^\+?\d{1,4}?[-.\s]?\(?[0-9]*\)?[-.\s]?\d{1,}$/;
    const dniRegex = /^\d{8}$/

    if (!username) throw Error("Debe ingresar un nombre de usuario");
    else {
        if (username.length < 5) throw Error("El usuario debe contener más de 5 caracteres");
        if (username.length > 20) throw Error("El usuario debe contener menos de 20 caracteres");
    }

    if (!password) throw Error("Debe ingresar una contraseña");
    else {
        if (!passwordRegex.test(password)) throw Error("La contraseña debe tener al menos una mayúscula y un número");
    }

    if (!name) throw Error("Debe ingresar su nombre y apellido tal como figura en el dni");
    else {
        if (!nameRegex.test(name)) throw Error("El nombre no puede tener números, y debe contener nombre + apellido");
    }

    if (!nDni) throw Error("Debe ingresar el numero que figura en el dni");
    else {
        if (!dniRegex.test(nDni)) throw Error("El numero de dni debe contener 8 numeros");
    }

    if (!email) throw Error("Debe ingresar su email");
    else {
        if (!emailRegex.test(email)) throw Error("Debe ingresar un formato de email válido ejemplo@ejemplo.com");
    }

    if (!phone) throw Error("Debe ingresar un numero de telefono");
    else {
        if (!phoneRegex.test(phone)) throw Error("Debe ingresar un telefono válido con 10 números, ejemplo: 2613012708");
    }

    next();
}