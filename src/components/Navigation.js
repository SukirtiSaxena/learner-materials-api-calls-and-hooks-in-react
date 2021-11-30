import React, { useState, useContext } from "react";
import { FavouriteContext } from '../App';

function Navigation({ currentPage, setCurrentPage, buttonText, setButtonText }) {
    // const [buttonText, setButtonText] = useState("Show Favourites");
    const [characterFavourites, setCharacterFavourites] = useContext(FavouriteContext);

    const nextPage = () => {
        const newPageNumber = currentPage + 1;
        setCurrentPage(newPageNumber);
    }

    const prevPage = () => {
        if (currentPage > 1) {
            const newPageNumber = currentPage - 1;
            setCurrentPage(newPageNumber);
        }
    }

    const favPage = () => {
        buttonText === "Show Favourites" ? setButtonText("Show All") : setButtonText("Show Favourites");
        console.log("Fav chars:", characterFavourites);
        setCharacterFavourites(characterFavourites);
    }

    return (
        <div className="navigation">
            <div className="navigation__item">
                <button className="navigation__button" onClick={prevPage}>Prev Page</button>
            </div>
            <div className="navigation__item">
                <button className="navigation__button" onClick={favPage}>{buttonText}</button>
            </div>
            <div className="navigation__item">
                <button className="navigation__button" onClick={nextPage}>Next Page</button>
            </div>
        </div>

    )
}

export default Navigation