import React from 'react'

const CharactersMaker = (props) => {
    // console.log(props)
    const {gender,name,status,species,origin,location,image }= props.char
    return (
            <div className='cardHolder'>
            <h2>name {name}</h2>
            <h3>status {status}</h3>
            <h3>species {species}</h3>
            <h3>origin {origin.name}</h3>
            <h3>Gender {gender}</h3>
            <img src={image}></img>
            
        </div>
       
    )
}

export default CharactersMaker

