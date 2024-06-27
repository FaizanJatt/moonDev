import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
import { addToCart } from "@/store/cartSlice";

interface Pizza {
  id: number;
  name: string;
  description: string;
  price: number;
}

const DetailsScreen: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const pizza = (route.params as { pizza: Pizza }).pizza;
  console.log(pizza);

  const handleAddToCart = () => {
    dispatch(addToCart(pizza));
    navigation.navigate("Cart");
  };

  const goBack = () => {
    const fromScreen = route.params?.from || "Home";
    navigation.navigate(fromScreen);
  };

  return (
    <View className="p-4 flex-1 gap-y-1 mt-4">
      <TouchableOpacity
        className="absolute z-40 top-5 left-5 mt-4"
        onPress={goBack}
      >
        <MaterialIcons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text className="text-2xl font-bold mb-2 mt-2 text-center">
        {pizza.name}
      </Text>
      {pizza.category && (
        <View className="flex  flex-row mt-3 justify-start items-center gap-x-1">
          <Text className="font-bold text-xl">Category:</Text>
          <View className="flex-row gap-2 flex-wrap">
            <Text> {pizza.category}</Text>
          </View>
        </View>
      )}
      {pizza.topping && (
        <View className="flex  flex-column mt-3 justify-start items-start gap-x-1">
          <Text className="font-bold text-xl">Toppings:</Text>
          <View className="flex-row gap-2 flex-wrap">
            {pizza.topping?.map((Topping, i) => {
              return (
                <Text key={`${Topping}+${i}+${Math.random() * 999}`}>
                  {Topping}
                </Text>
              );
            })}
          </View>
        </View>
      )}
      <View className="flex flex-row gap-x-3">
        <Text className="font-bold text-xl">Price:</Text>
        <Text className="text-lg font-semibold mb-4">
          ${pizza.price.toFixed(2)}
        </Text>
      </View>
      <TouchableOpacity
        onPress={handleAddToCart}
        className="bg-green-500 items-center justify-center py-3 rounded-lg"
      >
        <Text className="text-white text-base font-bold">Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailsScreen;
