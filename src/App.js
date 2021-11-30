
import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CharacterContainer from './components/CharacterContainer';
import Navigation from './components/Navigation';
import axios from 'axios';
export const FavouriteContext = React.createContext([{}, () => { }]);

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
    setCharacters(apiResponse.data.data);
  };

  return (
    <FavouriteContext.Provider value={[characterFavourites, setCharacterFavourites]}>
      <div className="page">
        <Header currentPage={currentPage} />
        <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <CharacterContainer characters={characters} />
      </div>
    </FavouriteContext.Provider>
  );
}

export default App;