import { createContext, useEffect, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  toggleFavHandler: (id) => {},
});

const FavoritesContextProvider = ({ children }) => {
  const [favoriteCardsIds, setFavoriteCardsIds] = useState([]);

  useEffect(() => {
    const existingFavourites =
      JSON.parse(localStorage.getItem("favourites")) || [];
    console.log(existingFavourites);

    existingFavourites.forEach((element) => {
      favoriteCardsIds.push(element.id);
    });
  }, []);

  const toggleFavHandler = (data) => {
    const index = favoriteCardsIds.indexOf(data.id);
    if (index !== -1) {
      setFavoriteCardsIds((pervState) =>
        pervState.filter((cardId) => cardId !== data.id)
      );

      const existingFavourites =
        JSON.parse(localStorage.getItem("favourites")) || [];

      const updatedItems = existingFavourites.filter(
        (item) => item.id !== data.id
      );

      localStorage.setItem("favourites", JSON.stringify(updatedItems));
    } else {
      setFavoriteCardsIds((prevState) => [...prevState, data.id]);
      const existingFavourites =
        JSON.parse(localStorage.getItem("favourites")) || [];
      // Add the new favourite to the array
      existingFavourites.push(data);
      // Save the updated favourites back to local storage
      localStorage.setItem("favourites", JSON.stringify(existingFavourites));
    }
  };

  const value = {
    ids: favoriteCardsIds,
    toggleFavHandler,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
