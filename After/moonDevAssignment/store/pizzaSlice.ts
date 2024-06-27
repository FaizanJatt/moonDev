import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface Pizza {
  id: number;
  name: string;
  description: string;
  price: number;
}

interface PizzaState {
  pizzas: Pizza[];
  isLoading: boolean;
  error: string | null;
}

const initialState: PizzaState = {
  pizzas: [],
  isLoading: false,
  error: null,
};

export const fetchPizzas = createAsyncThunk("pizza/fetchPizzas", async () => {
  try {
    const response = await fetch(
      "https://private-anon-b26f96742a-pizzaapp.apiary-mock.com/restaurants/1/menu?category=Pizza&orderBy=rank"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching pizzas:", error);
    throw new Error("Error fetching pizzas."); // Rethrow for error handling in the slice
  }
});

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.isLoading = false;
        state.pizzas = action.payload;
      })
      .addCase(fetchPizzas.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to fetch pizzas.";
      });
  },
});

export default pizzaSlice.reducer;
