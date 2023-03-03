export const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export const validarUser = (userData) => {
    const errors = {}
    if(!userData.userName) errors.userName = "El nombre de ususario no puede estar vacio"
    if(!regexEmail.test(userData.userName)) errors.userName = 'Debe ser un correo electrónico';
    if(userData.length > 35) errors.userName = 'El imail no puede tener mas de 35 caracteres'
    if(userData.password.length < 6 || userData.password.length > 10) errors.password = "La password debe tener entre 6 y 10 caracteres"
    // if(userData.password.match(/\d/)) errors.password = "La password debe tener al menos un numero"
    return errors;
}

// const regexPassword = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[$@$!%?&])[A-Za-z\d$@$!%?&]{8,15}/
