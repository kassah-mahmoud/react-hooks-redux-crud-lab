import React from "react";
import Restaurant from "./Restaurant";

function Restaurants({ restaurants }) {
  return (
    <ul>
      {restaurants.map?.((res) => (
        <Restaurant key={res.id} restaurant={res} />
      ))}
    </ul>
  );
}

export default Restaurants;
