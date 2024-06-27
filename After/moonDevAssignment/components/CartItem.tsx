import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/cartSlice";

interface CartItemProps {
  item: {
    id: number;
    name: string;
    price: number;
    quantity: number;
  };
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <View className="flex-row justify-between items-center p-4 border-b border-gray-200">
      <View className="flex-1">
        <Text className="text-lg font-semibold">{item.name}</Text>
        <Text className="text-gray-500">
          Quantity: {item.quantity} x ${item.price.toFixed(2)}
        </Text>
        <Text className="text-gray-500">
          Total: ${(item.quantity * item.price).toFixed(2)}
        </Text>
      </View>
      <TouchableOpacity
        className="bg-red-500 px-3 py-2 rounded-md"
        onPress={handleRemoveFromCart}
      >
        <Text className="text-white font-semibold">Remove</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartItem;
