import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  cart: []
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {

    }
  }
})

export const { addItemToCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
