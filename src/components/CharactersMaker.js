import React from 'react'

const CharactersMaker = (props) => {
    // console.log(props)
    const {gender,name,status,species,origin,location,image }= props.char
    return (
            <div className='Cardholder'>
            <h2>name {name}</h2>
            <h2>status {status}</h2>
            <h2>species {species}</h2>
            <h2>origin {origin.name}</h2>
            <img src={image}></img>
            <h2>Gender {gender}</h2>
            {/* <p>Breeery Type: {brewery_type}</p>
            <a href={website_url}>Visit Us Here</a> */}
        </div>
       
    )
}

export default CharactersMaker

