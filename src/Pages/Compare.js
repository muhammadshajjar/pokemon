import React, { useState } from "react";
import Header from "../Components/Header";

import "./Compare.css";
import DisplayList from "../Components/DisplayList";
import pokiFightGif from "../assets/images/fight.webp";
import PagesNav from "../Components/PagesNav";

function Compare() {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [firstPokimon, setFirstPokimon] = useState([]);
  const [secondPokimon, setSecondPokimon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [winner, setIsWinner] = useState([]);
  const [isFighting, setIsFighting] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!firstName || !secondName) {
      alert("Please give valid name");
      return;
    }
    setIsLoading(true);
    setFirstName("");
    setSecondName("");
    setShowResult(false);
    setIsFighting(false);

    console.log(showResult, isFighting, winner);

    console.log("submit called");

    const getDatabyName = async (name) => {
      console.log(name);

      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
      const newRes = await res.json();
      return newRes;
    };

    const gettingData = async () => {
      try {
        setFirstPokimon(await getDatabyName(firstName));
        setSecondPokimon(await getDatabyName(secondName));
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        alert("Something went wrong!");
      }
    };

    gettingData();
  };

  const fightPokimonHandler = () => {
    setIsFighting(true);

    setTimeout(() => {
      const firstPokiExp = firstPokimon.base_experience;
      const secondPokiExp = secondPokimon.base_experience;
      console.log(firstPokiExp, secondPokiExp);
      if (firstPokiExp > secondPokiExp) setIsWinner(firstPokimon);
      else setIsWinner(secondPokimon);
      setIsFighting(false);
      setShowResult(true);
    }, 3000);
  };

  return (
    <>
      <Header />
      <section className="container">
        {/* <div className="compare-nav">
          <GoBackBtn />
          <h2>Compare</h2>
        </div> */}
        <PagesNav pageName="Compare" />
        <div>
          <form className="compare-input">
            <input
              type="text"
              placeholder="Enter Name of Pokemon"
              onChange={(e) => setFirstName(e.target.value.toLowerCase())}
              value={firstName}
            />
            <input
              type="text"
              placeholder="Enter Name of Pokemon"
              onChange={(e) => setSecondName(e.target.value.toLowerCase())}
              value={secondName}
            />
            <button
              type="submit"
              onClick={submitHandler}
              className="compare-btn"
            >
              Compare
            </button>
          </form>
        </div>
        <div className="result">
          {!isLoading && !isFighting && <DisplayList data={firstPokimon} />}
          {!isLoading && !isFighting && <DisplayList data={secondPokimon} />}
        </div>

        <div className="fighting">
          {!isLoading && !showResult && (
            <button className="fight-btn" onClick={fightPokimonHandler}>
              {(isFighting && "Fighting...") || "Fight!"}
            </button>
          )}
          {isFighting && <img src={pokiFightGif} />}
          {showResult && <img src={winner.sprites?.front_default} />}
          {showResult && <h3>{winner.name} is Winner 🏆 </h3>}
        </div>
      </section>
    </>
  );
}

export default Compare;
