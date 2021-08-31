import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { restaurantAdded } from "./restaurantsSlice";

function RestaurantInput() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(restaurantAdded(name));
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input name="name" value={name} type="text" onChange={handleChange} />
        <button type="submit">Add Restaurant</button>
      </label>
    </form>
  );
}

export default RestaurantInput;
