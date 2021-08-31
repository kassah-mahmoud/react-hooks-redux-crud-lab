import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { reviewAdded } from "./reviewsSlice";

function ReviewInput({ restaurantId }) {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(
      reviewAdded({
        comment,
        restaurantId,
      })
    );
  }

  function handleChange(e) {
    setComment(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="comment">comment</label>
      <textarea
        id="comment"
        name="comment"
        defaultValue={comment}
        onChange={handleChange}
      />
      <button type="submit">add review</button>
    </form>
  );
}

export default ReviewInput;
