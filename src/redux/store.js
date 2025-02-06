import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"; // Import reducer từ cartSlice

export const store = configureStore({
  reducer: {
    cart: cartReducer, // Định nghĩa reducer giỏ hàng
    // product: productReducer,
  },
});

export default store;
