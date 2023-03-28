import React from "react";

import { BiGitCompare } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import "./NavigationActions.css";

function NavigationActions() {
  const navigate = useNavigate();
  return (
    <div className="navigation-cont">
      <button
        className="navigation-btn com-btn"
        onClick={() => {
          navigate("/compare");
        }}
      >
        Compare
        <BiGitCompare style={{ marginLeft: "8px" }} />
      </button>
      <button
        className="navigation-btn fav-btn"
        onClick={() => {
          navigate("/favourite");
        }}
      >
        Favorites
        <AiFillStar style={{ color: "gold", marginLeft: "8px" }} />
      </button>
    </div>
  );
}

export default NavigationActions;
