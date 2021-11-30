import React, { useContext } from "react";
import { FavouriteContext } from '../App';

function Character({ character }) {
  const [characterFavourites, updateFavourites] = useContext(FavouriteContext);

  let imgSrc = "https://picsum.photos/300/200/?blur";
  if (character.imageUrl) {
    imgSrc = character.imageUrl.substring(0, character.imageUrl.indexOf('/revision'));
  }

  function toggleFavouriteForCharacter(characterId, characterName, characterImgUrl) {
    if (!characterFavourites.includes(characterId)) {
      // add to favourites
      updateFavourites([...characterFavourites, characterId]);
    }
    else {
      //  remove from favourites
      const updatedFavourites = characterFavourites.filter((id) => id !== characterId);
      updateFavourites(updatedFavourites);
    }
  }

  return (
    <article className="character-item">

      <h2>{character.name}</h2>

      <div className="character-item__actions" onClick={() => toggleFavouriteForCharacter(character._id, character.name, character.imageUrl)}>
        {!characterFavourites.includes(character._id) ? "Add to Favourites" : "Favourited"}
      </div>

      <img className="character-item__img" src={imgSrc} alt={character.name} />

    </article>
  )
}

export default Character