// src/redux/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { Button, message, Space } from "antd";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
        message.success("sản phảm đã có trong giỏ hàng");
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
        message.success("thêm giỏ hàng thành công");
      }
    },
    incrementQuantity: (state, action) => {
      // console.log(state, action);
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item.id !== action.payload
      );
      state.cart = removeItem;
    },
    removeAll: (state, action) => {
      state.cart.splice(0);
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  removeAll,
} = cartSlice.actions;
