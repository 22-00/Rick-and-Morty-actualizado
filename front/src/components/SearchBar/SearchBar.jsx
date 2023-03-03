import styles from "./SearchBar.module.css"
import { useState } from "react";
import {NavLink} from "react-router-dom"

export default function SearchBar({onSearch}) {
   const [character, setCharacter] = useState();

   const evento = (event)=> {
      onSearch(character)
   }

   const random = ()=>{
    onSearch(Math.floor(Math.random() * 826))
   }

   return (
      <div className={styles.barra}>
         <input type='search' placeholder="Buscar personajes"  onChange={(event) =>setCharacter(event.target.value)}/>
      <button onClick={evento}>Agregar</button>
      <button onClick={random}>Random</button>
      <NavLink to='/about'>
      <button>info</button>
      </NavLink>
      <NavLink to='/home'>
        <button>inicio</button>
      </NavLink>
      <NavLink to="/favorites">
      <button>favoritos</button>
      </NavLink>
     </div>
   ); 
}
