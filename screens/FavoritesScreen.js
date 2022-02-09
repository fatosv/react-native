import React from "react";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";

const FavoritesScreen = ({ navigation }) => {
  const favMeals = useSelector((state) => state.meals.favoriteMeals);

  return <MealList listData={favMeals} navigation={navigation} />;
};

export default FavoritesScreen;
