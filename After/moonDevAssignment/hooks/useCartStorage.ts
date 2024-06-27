import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart, setCartItems } from "../store/cartSlice";

interface Pizza {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity?: number;
}

export const useCart = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadCart = async () => {
      try {
        const cartData = await AsyncStorage.getItem("cartItems");
        if (cartData) {
          dispatch(setCartItems(JSON.parse(cartData)));
        }
      } catch (error) {
        console.error("Error loading cart:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadCart();
  }, [dispatch]);

  const addToCart = (pizza: Pizza) => {
    dispatch(addToCart(pizza));
    saveCartToStorage();
  };

  const removeFromCart = (pizzaId: number) => {
    dispatch(removeFromCart(pizzaId));
    saveCartToStorage();
  };

  const saveCartToStorage = async () => {
    try {
      const cartItems = await AsyncStorage.getItem("cartItems");
      await AsyncStorage.setItem("cartItems", JSON.stringify(cartItems));
    } catch (error) {
      console.error("Error saving cart:", error);
    }
  };

  return { addToCart, removeFromCart, isLoading };
};
