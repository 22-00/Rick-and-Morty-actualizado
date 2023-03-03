import React from 'react'
import { useSelector } from 'react-redux'
import { eliminarPersonaje } from '../../redux/actions'
import { useDispatch } from 'react-redux'


function Favorites() {

const {myFavorites} = useSelector((state) => state)
const dispatch = useDispatch()

const borrar = (event) =>{
    const id = event.target.value
    dispatch(eliminarPersonaje(id))
}

  return (
    <div>
        {
            myFavorites.map((fav,indice)=>{
                return (
                    <div key={indice}>
                    <button value={fav.id} onClick={borrar}>ELIMINAR</button>
                    <h1>{fav.name}</h1>
                    <h2>{fav.species}</h2>
                    <h2>{fav.gender}</h2>
                    <h3>{fav.id}</h3>
                    <img src={fav.image} alt="proyecto de rick and morty"/>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Favorites