import Cards from './components/Cards/Cards.jsx'
import { Nav } from './components/Nav/Nav';
import {  useState, useEffect } from 'react';
import {Routes, Route, useNavigate} from "react-router-dom";
import { About } from './components/About/About.jsx';
import { Detail } from './components/Detail/Detail.jsx';
import { Form } from './components/Form/Form.jsx';
import Favorites from './components/Favorites/Favorites.jsx';

function App () {
  const [characters, setCharacters] = useState([])
  const [access, setAcces] = useState(false)
  
  const navigate = useNavigate();

  const username = 'ejemplo@gmail.com';
  const password = "12horacio";

  const login = (userData) =>{
    if(userData.password === password && userData.userName === username){
      setAcces(true)
      navigate("/home")
    }
  }

useEffect(()=>{
    !access && navigate("/");
  }, [access, navigate])

  const onClose = (event) => {
    const valor = event.target.value
    console.log(valor)
    setCharacters([...characters].filter( character =>character.id != valor))
  }

  const onSearch = (character) => {
    fetch(`http://localhost:3001/rickandmorty/onsearch/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
 }

  return (
    <div>
        <Nav onSearch={onSearch}/>
        <Routes>
      <Route path='/favorites' element={<Favorites/>}></Route>
      <Route path='/' element={<Form login={login}/>}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route  path="/home" element={<Cards onClose={onClose} characters={characters} />}></Route>
      <Route path="/detail/:id" element={<Detail/>}> </Route>
        </Routes>
    </div>
  )
}

export default App