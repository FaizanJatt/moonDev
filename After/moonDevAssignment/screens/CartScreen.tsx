import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "@/store/cartSlice";
import { SafeAreaView } from "react-native-safe-area-context";

const CartScreen: React.FC = () => {
  const cartItems = useSelector((state: any) => state.cart.cartItems);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handlePizzaPress = (pizza: any) => {
    navigation.navigate("Details", { pizza, from: "Cart" });
  };

  const handleRemoveFromCart = (pizzaId: number) => {
    dispatch(removeFromCart(pizzaId));
  };

  return (
    <SafeAreaView className="p-4 flex-1 justify-center">
      <Text className="text-3xl font-bold mb-4 text-center">Your Cart</Text>
      {cartItems.length === 0 ? (
        <Text className="text-center">Your cart is empty.</Text>
      ) : (
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              className="flex flex-row justify-between items-center border-b p-2"
              onPress={() => handlePizzaPress(item)}
            >
              <View>
                <Text className="font-bold">{item.name}</Text>
                <Text className="text-gray-500">Quantity: {item.quantity}</Text>
                <Text className="text-gray-500">
                  ${(item.price * item.quantity).toFixed(2)}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => handleRemoveFromCart(item.id)}
                className="px-3 py-1 bg-red-500 rounded-md"
              >
                <Text className="text-white">Remove</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default CartScreen;
