import React from "react";
import { Text, FlatList } from "react-native";
import PizzaItem from "@/components/PizzaItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchPizzas } from "@/store/pizzaSlice";

import { SafeAreaView } from "react-native-safe-area-context";
import { useFocusEffect } from "@react-navigation/native";

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();
  const pizzas = useSelector((state: any) => state.pizza.pizzas);
  const isLoading = useSelector((state: any) => state.pizza.isLoading);
  const error = useSelector((state: any) => state.pizza.error);

  useFocusEffect(
    React.useCallback(() => {
      console.log("Fetching..");
      dispatch(fetchPizzas());
    }, [dispatch])
  );

  return (
    <SafeAreaView className="p-4 flex-1">
      <Text className="text-2xl font-bold mb-4  text-center">
        Pizza Listing
      </Text>
      {isLoading ? (
        <Text className="text-center ">Loading pizzas...</Text>
      ) : error ? (
        <Text className="text-red-500">{error}</Text>
      ) : (
        <FlatList
          data={pizzas}
          renderItem={({ item }) => <PizzaItem pizza={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
