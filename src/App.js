import React, { useState, useEffect } from 'react';
import CharactersMaker from './components/CharactersMaker'; 
import './App.css';
import Axios from 'axios';
import {BASECHAR_URL,BASE_LOCATION_URL,BASE_EPISODE_URL} from './constants/index'
import styled from "styled-components";



  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  function App() {
    // Delcare varibles to hold what we are pulling from each API and 
    const [characters, setCharacters] = useState(null)
    const [locations, setLocations] = useState([])
    const [episdoes, setEpisdoes] = useState([])
  
    // export const BASECHAR_URL = 'https://rickandmortyapi.com/api/character'
    // export const BASELOCATION_URL = 'https://rickandmortyapi.com/api/location'
    // export const BASEEPISODE_URL = 'https://rickandmortyapi.com/api/episode'


    useEffect(() => {
      Axios.get(BASECHAR_URL)
        .then(res => {
          setCharacters(res.data)
        })
        .catch(err => console.log(err))
    },[] ) 
    
    
  const MainWrapper = styled.div`
      display: flex;
      align-content: space-around;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
`;
    // useEffect(() => {
    //   Axios.get(BASE_LOCATION_URL)
    //     .then(res => {
    //       setLocations(res.data)
    //       })
    //     .catch(err => console.log(err))
    // },[] )   
    
    // useEffect(() => {
    //   Axios.get(BASE_EPISODE_URL)
    //     .then(res => {
    //       setEpisdoes(res.data)
    //     })
    //     .catch(err => console.log(err))
    // },[] )  




return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <MainWrapper>
      {
        characters && characters.results.map(char => <CharactersMaker key={char.id} char={char}/>)
      }
      </MainWrapper>
     
      </div>
  );
}

export default App;

