import React, { useState, useEffect, useContext } from "react";
import GetDataByName from "../Components/GetDataByName";
import Header from "../Components/Header";
import NavigationActions from "../Components/NavigationActions";
import SearchByGeneration from "../Components/SearchByGeneration";

import { FavoritesContext } from "../store/fav-context";

function Home() {
  const [initialData, setInitialData] = useState([]);
  const [newGeneration, setNewGeneration] = useState([]);
  const [generation, setGeneration] = useState(null);

  const favoriteCtx = useContext(FavoritesContext);

  // for initial Data
  useEffect(() => {
    const getInitialData = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const newResponse = await response.json();

      setInitialData(newResponse.results);
    };

    getInitialData();
  }, []);

  useEffect(() => {
    console.log(favoriteCtx.ids);
  }, []);

  // for getting the generation

  useEffect(() => {
    const getInitialData = async () => {
      if (generation !== null) {
        const response = await fetch(
          `https://pokeapi.co/api/v2/generation/${generation}/`
        );
        const newResponse = await response.json();

        setNewGeneration(newResponse.pokemon_species);
      }
    };

    getInitialData();
  }, [generation]);

  const getGenerationHandler = async (data) => {
    setGeneration(data);
    setNewGeneration([]);
  };

  return (
    <>
      <Header />
      <div className="container">
        <NavigationActions />
        <SearchByGeneration generationhandler={getGenerationHandler} />
        <ul className="ul-card">
          {!generation
            ? initialData?.map((item) => {
                return <GetDataByName name={item.name} />;
              })
            : newGeneration?.map((item) => {
                return <GetDataByName name={item.name} />;
              })}
        </ul>
      </div>
    </>
  );
}

export default Home;
