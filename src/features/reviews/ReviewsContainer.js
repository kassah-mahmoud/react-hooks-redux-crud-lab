import React from "react";
import { useSelector } from "react-redux";
import ReviewInput from "./ReviewInput";
import Reviews from "./Reviews";

function ReviewsContainer({ restaurantId }) {
  const reviews = useSelector((state) => state.reviews.entities);
  return (
    <div>
      <ReviewInput restaurantId={restaurantId} />
      <Reviews
        reviews={reviews.filter((rev) => rev.restaurantId === restaurantId)}
      />
    </div>
  );
}

export default ReviewsContainer;
