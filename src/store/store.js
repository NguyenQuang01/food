// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./slice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
