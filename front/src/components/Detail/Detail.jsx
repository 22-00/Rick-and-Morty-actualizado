import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

export const Detail = () => {
  const [character, setCharacter] = useState({})
const {id} = useParams()
const navigate = useNavigate();

const inicio = () =>{
  navigate("/home")
}
useEffect(() => {
  fetch(`http://localhost:3001/rickandmorty/detail/${id}`)
    .then((response) => response.json())
    .then((char) => {
      if (char.name) {
        setCharacter(char);
         console.log(char)
      } else {
        window.alert("No hay personajes con ese ID");
      }
    })
    .catch((err) => {
      window.alert("No hay personajes con ese ID");
    });
  return setCharacter({});
}, [id]);

  return (
    <div>
      <button onClick={inicio}>X</button>
      <h2>{character.name}</h2>
      <h2>{character.status}</h2>
      <h2>{character.species}</h2>
      <h2>{character.gender}</h2>
      <img src={character.image} alt={character.name} width="300px" height="300px"/>
    </div>
  )
 
}




