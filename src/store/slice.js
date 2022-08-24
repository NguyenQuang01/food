// src/redux/cartSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Button, message, Space } from "antd";
export const getPosts = createAsyncThunk(
  //action type string
  "posts/getPosts",
  // callback function
  async (thunkAPI) => {
    const res = await fetch(
      "https://62cfbda11cc14f8c087c4451.mockapi.io/api/product"
    ).then((data) => data.json());
    return res;
  }
);
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    entities: [],
    loading: false,
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
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.loading = true;
    },
    [getPosts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.entities = payload;
    },
    [getPosts.rejected]: (state) => {
      state.loading = false;
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
