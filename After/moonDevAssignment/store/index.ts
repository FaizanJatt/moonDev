import { configureStore } from "@reduxjs/toolkit";
import pizzaReducer from "./pizzaSlice";
import cartReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
