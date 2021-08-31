import { v4 as uuid } from "uuid";
import { createSlice } from "@reduxjs/toolkit";

const reviewSlice = createSlice({
  name: "reviews",
  initialState: {
    entities: [],
  },
  reducers: {
    reviewAdded(state, action) {
      state.entities.push({
        id: uuid(),
        comment: action.payload.comment,
        restaurantId: action.payload.restaurantId,
      });
    },
    reviewRemoved(state, action) {
      const index = state.entities.findIndex(
        (review) => review.id === action.payload
      );
      state.entities.splice(index, 1);
    },
  },
});

export const { reviewAdded, reviewRemoved } = reviewSlice.actions;
export default reviewSlice.reducer;
