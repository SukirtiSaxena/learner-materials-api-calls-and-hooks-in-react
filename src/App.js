
import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CharacterContainer from './components/CharacterContainer';
import Navigation from './components/Navigation';
import axios from 'axios';

function App() {

  // Some dummy state representing disney characters
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [characterFavourites, setCharacterFavourites] = useState([]);

  useEffect(() => {
    getCharacters(currentPage);
  }, [currentPage]);

  const getCharacters = async (pageNumber) => {
    const disneyUrl = 'http://api.disneyapi.dev/characters?page=' + pageNumber;
    const apiResponse = await axios.get(disneyUrl);
    console.log("disneyUrl:", disneyUrl);
    setCharacters(apiResponse.data.data);
  };

  return (
    <div className="page">
      <Header currentPage={currentPage} />
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <CharacterContainer characters={characters}
        characterFavourites={characterFavourites}
        updateFavourites={setCharacterFavourites} />
    </div>
  );
}

export default App;
