import React from 'react'
import { useNavigate } from 'react-router-dom'

export const About = () => {

const navegador = useNavigate()
  const volver = ()=>{
    navegador("/home")
  }

  return (
    <div>
      <button onClick={volver}>volver</button>
        <title>PROYECTO RICK AND MORTY</title>
        <p>Este Aplicacion se basa en la serie animada de <b>RICK AND MORTY</b>. Es un proyecto que se empezo a hacer en la segunda semana Del M2 donde empezamos a practicar React y redux y lo aplicamos a esta App como para ir mejorando nuestro conocimiento y tener donde practicar</p>
        <p>Esta app fue creada con mucho amor y dedicacion.</p>
        <h2><span>creada por:</span> Horacio Agustin Cano</h2>
    </div>
  )
}
