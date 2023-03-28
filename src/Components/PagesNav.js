import React from "react";
import GoBackBtn from "./GoBackBtn";

import "./PagesNav.css";

function PagesNav({ pageName }) {
  return (
    <div className="nav">
      <GoBackBtn />
      <h2>{pageName}</h2>
    </div>
  );
}

export default PagesNav;
