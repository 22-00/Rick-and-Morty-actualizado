// const express = require("express")
const axios = require("axios")

const getCharById = (req, res)=>{
    const {id} = req.params;
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response)=> response.data)
    .then((data)=>{
        let character = {
            id: data.id,
            image: data.image,
            name: data.name,
            gender: data.gender,
            species: data.species
        }
        res.status(200).json(character)
    })
    
    .catch((err)=>{
        res.status(500).json({message: err})
    })
    
}

module.exports = getCharById;