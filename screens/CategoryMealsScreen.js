import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import MealList from "../components/MealList";
import { CATEGORIES } from "../data/dummy-data";
import DefaultText from "../components/DefaultText";

const CategoryMealsScreen = ({ navigation, route }) => {
  const { categoryId } = route.params;

  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);

  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>No meals found, try checking your filters.</DefaultText>
      </View>
    );
  }

  return <MealList listData={displayedMeals} navigation={navigation} />;
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
