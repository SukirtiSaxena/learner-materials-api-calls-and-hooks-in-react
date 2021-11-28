function Character({ character }) {
let imgSrc="https://picsum.photos/300/200/?blur";
if (character.imageUrl) {
  imgSrc= character.imageUrl.substring(0,character.imageUrl.indexOf('/revision'));
}

  return (
    <article className="character-item">

      <h2>{character.name}</h2>

      <div className="character-item__actions">
        Add to Favourites
      </div>

      <img className="character-item__img" src={imgSrc} alt={character.name} />

    </article>
  )
}

export default Character