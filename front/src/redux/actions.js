export const AGREGAR_PERSONAJE = "AGREGAR_PERSONAJES";
export const ELIMINAR_PERSONAJE = "ELIMINAR_PERSONAJES";


export const agregarPersonaje = (personaje) => {
    return {type: AGREGAR_PERSONAJE, payload: personaje, }
}

export const eliminarPersonaje = (id) => {
    return {type: ELIMINAR_PERSONAJE, payload: id}
}

