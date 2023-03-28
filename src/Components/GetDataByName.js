import React, { useState, useEffect } from "react";
import DisplayList from "./DisplayList";

function GetDataByName(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getDatabyName = async () => {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${props.name}/`
      );
      const newRes = await res.json();

      setData(newRes);
    };
    getDatabyName();
  }, []);

  return (
    <>
      <DisplayList data={data} />
    </>
  );
}

export default GetDataByName;
