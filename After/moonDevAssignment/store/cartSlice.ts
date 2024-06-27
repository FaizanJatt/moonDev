import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Pizza {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity?: number;
}

interface CartState {
  cartItems: Pizza[];
}

const initialState: CartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Pizza>) => {
      const existingPizza = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingPizza) {
        existingPizza.quantity! += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
