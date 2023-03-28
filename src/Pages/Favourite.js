import React, { useState, useEffect, useContext } from "react";
import DisplayList from "../Components/DisplayList";
import GoBackBtn from "../Components/GoBackBtn";
import Header from "../Components/Header";
import PagesNav from "../Components/PagesNav";
import { FavoritesContext } from "../store/fav-context";

import "./Favourite.css";
function Favourite() {
  const [favourites, setFavourites] = useState([]);

  const favCtx = useContext(FavoritesContext);

  useEffect(() => {
    // Retrieve favourites from local storage

    console.log("called the favorites");

    const existingFavourites =
      JSON.parse(localStorage.getItem("favourites")) || [];

    // Set favourites in component state

    setFavourites(existingFavourites);
  }, [favCtx.ids]);

  return (
    <>
      <Header />
      <div className="container">
        <PagesNav pageName="Favorites" />

        <ul className="favorite">
          {favourites.map((favourite, index) => (
            <DisplayList data={favourite} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default Favourite;
