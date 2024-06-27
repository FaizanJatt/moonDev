import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

interface PizzaItemProps {
  pizza: {
    id: number;
    name: string;
    description: string;
    price: number;
  };
}

const PizzaItem: React.FC<PizzaItemProps> = ({ pizza }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleViewDetails = () => {
    console.log("NAVIGATE");
    navigation.navigate("Details", { pizza, from: "Home" });
  };

  const handleAddToCart = () => {
    // Dispatch the addToCart action with the pizza data
    dispatch(addToCart(pizza));
  };

  return (
    <View className="flex-row justify-between items-center py-2 border-b border-gray-200">
      <View style={{ flex: 1 }}>
        <Text className="text-lg font-semibold">{pizza.name}</Text>
        <Text className="text-gray-500">${pizza.price.toFixed(2)}</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={handleViewDetails}
          className="bg-blue-500 px-4 py-2 rounded-md mr-2"
        >
          <Text className="text-white text-sm font-bold">Details</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleAddToCart}
          className="bg-green-500 px-4 py-2 rounded-md"
        >
          <Text className="text-white text-sm font-bold">Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PizzaItem;
