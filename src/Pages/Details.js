import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import GoBackBtn from "../Components/GoBackBtn";
import Header from "../Components/Header";
import PagesNav from "../Components/PagesNav";
import { captitalizeFirstLetter } from "../helper/capitalizeFirstLetter";

import "./Details.css";
function Details() {
  const { state } = useLocation();
  const navigate = useNavigate();
  console.log(state);

  return (
    <>
      <Header />
      <div className="container">
        <PagesNav pageName="Details" />
        <div className="card">
          <div className="profile-detail">
            <img src={state.sprites.front_default} />
            <h2>{captitalizeFirstLetter(state.name)}</h2>
            <div>
              <h3>Weight : </h3>
              <p>{state.weight / 10} kg</p>
            </div>
            <div>
              <h3>Height :</h3>
              <p> {state.height / 10} m</p>
            </div>
            <div>
              <h3>Experience :</h3>
              <p> {state.base_experience}</p>
            </div>
          </div>
          <div className="profile-abil">
            <p>Abilities:</p>
            <div>
              {state.abilities.map((item) => {
                return <li className="list">{item.ability.name}</li>;
              })}
            </div>
            <p>Moves:</p>
            <div>
              {state.moves.map((item) => {
                return <li className="list">{item.move.name}</li>;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
