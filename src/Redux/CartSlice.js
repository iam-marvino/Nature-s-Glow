import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
};

let cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addedToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push(action.payload);
      }

      try {
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      } catch (error) {
        console.error("Error saving to local storage:", error);
      }
    },
    removedFromCart: (state, action) => {
      const payload = action.payload;
      const updatedCartItems = state.cartItems.filter(
        (item) => item.id !== payload.id
      );
      state.cartItems = updatedCartItems;

      try {
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      } catch (error) {
        console.error("Error saving to local storage:", error);
      }
    },
    emptyCart: (state) => {
      state.cartItems = [];
      localStorage.removeItem("cartItems");
      try {
        localStorage.removeItem("cartItems");
      } catch (error) {
        console.error("Error removing item from local storage:", error);
      }
    },
    increaseQuantity: (state, action) => {
      const payload = action.payload;
      const updatedCartItems = state.cartItems.map((item) => {
        if (item.id === payload.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });

      state.cartItems = updatedCartItems;
      
      try {
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      } catch (error) {
        console.error("Error updating local storage:", error);
      }
      
    },
    decreaseQuantity: (state, action) => {
      const payload = action.payload;
      const updatedCartItems = state.cartItems.map((item) => {
        if (item.id === payload.id && item.quantity > 1) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      });

      state.cartItems = updatedCartItems;
      try {
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      } catch (error) {
        console.error("Error updating local storage:", error);
      }
    },
  },
});

export let {
  addedToCart,
  removedFromCart,
  emptyCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
