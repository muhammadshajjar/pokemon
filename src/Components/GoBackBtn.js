import React from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import "./GoBackBtn.css";
function GoBackBtn() {
  const navigate = useNavigate();
  return (
    <button
      className="goback-btn"
      onClick={() => {
        navigate("/");
      }}
    >
      <BiLeftArrowAlt style={{ fontSize: "30px" }} />
    </button>
  );
}

export default GoBackBtn;
