import React, { useState } from 'react';
import { validarUser } from './Validation';
import { useEffect } from 'react';

export const Form = ({login}) => {

  const [userData, setUserData] = useState({
    userName: "",
    password:"",
  })

  const [errors, setErrors] = useState({
    userName: "",
    password:"",
  })

  const handleInputChange =(event) => {
    const propiedad = event.target.name;
    const valor = event.target.value;
    setUserData({
      ...userData,
      [propiedad]: valor,
    })
    setErrors(validarUser({
      ...userData,
      [propiedad]: valor,
    }))
  }

  useEffect(()=>{
    return function(){
    setUserData({ userName: "", password:"",})
      setErrors({ userName: "",password:"",})
    }
  },[])

  const handleSubmit = (event) =>{
    event.preventDefault()
    if(Object.keys(errors).length != 0){
      alert("COMPLETE CORRECTAMENTE LOS CAMPOS")
    } else {
      login(userData)
    }
  }


  return (
    <div>
      <form>
        <label htmlFor="userName" >NOMBRE DE USUARIO</label>
        <input type="text" name="userName" value={userData.userName} onChange={handleInputChange} placeholder="ESCRIBE TU USUARIO"></input>
        {errors.userName && <p>{errors.userName}</p>}
        <label htmlFor="password" >CONTRASEÑA</label>
        <input type="password" name="password" value={userData.password} onChange={handleInputChange} placeholder="ESCRIBE TU PASSWORD"></input>
        {errors.password && <p>{errors.password}</p>}
        <button onClick={handleSubmit}>LOGIN</button>
      </form>
    </div>
  )
}




