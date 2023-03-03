import React from 'react'
import SearchBar from '../SearchBar/SearchBar.jsx'
import styles from './Nav.module.css';
// import {NavLink} from "react-router-dom";

export const Nav = (props) => {
  return (
    
    <div className={styles.nav}>
        <SearchBar onSearch={props.onSearch}/>
    </div>
  )
}
