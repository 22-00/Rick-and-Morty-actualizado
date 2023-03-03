import styles from "./Card.module.css"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react";
import { agregarPersonaje } from "../../redux/actions";
import { eliminarPersonaje } from "../../redux/actions";

export default function Card(props) {
    const dispach = useDispatch()
   const [isFav, setIsfav] = useState(false);
   
   const myFavorites = useSelector((state) => state.myFavorites);

   const handleFavorite = () => {
      if(isFav === true) {
         setIsfav(false)
         dispach(eliminarPersonaje(props.id))
      } else {
         setIsfav(true)
         dispach(agregarPersonaje(props))
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsfav(true)
         }
      });
   }, [myFavorites]);

   return (
      <div className={styles.divContenedor}>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <button value={props.id} onClick={props.onClose}>X</button>
         <Link to={`/detail/${props.id}`}>
         <h2>{props.name}</h2>
         </Link>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <span>{props.id}</span>
         <div className={styles.Divimagen}><img className={styles.imagen} src={props.image} alt="proyecto de rick and morty" /></div>
      </div>
   );
} 
