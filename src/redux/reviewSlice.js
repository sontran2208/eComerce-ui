import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:3001/api/v1/reviews";

export const fetchReviews = createAsyncThunk(
  "review/fetchReviews",
  async (productId) => {
    const response = await axios.get(`${API_URL}/${productId}`);
    return { productId, reviews: response.data };
  }
);

export const addReview = createAsyncThunk(
  "review/addReview",
  async ({ productId, rating, comment }) => {
    const response = await axios.post(API_URL, { productId, rating, comment });
    return response.data;
  }
);
export const removeReview = createAsyncThunk(
  "review/removeReview",
  async (reviewId) => {
    await axios.delete(`${API_URL}/${reviewId}`);
    return reviewId;
  }
);

const reviewSlice = createSlice({
  name: "review",
  initialState: { reviews: {}, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.loading = false;
        state.reviews[action.payload.productId] = action.payload.reviews;
      })
      .addCase(fetchReviews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(addReview.fulfilled, (state, action) => {
        const { productId, ...newReview } = action.payload;
        state.reviews[productId] = [
          ...(state.reviews[productId] || []),
          newReview,
        ];
      })

      .addCase(removeReview.fulfilled, (state, action) => {
        Object.keys(state.reviews).forEach((productId) => {
          state.reviews[productId] = state.reviews[productId].filter(
            (review) => review.id !== action.payload
          );
        });
      });
  },
});

export default reviewSlice.reducer;
