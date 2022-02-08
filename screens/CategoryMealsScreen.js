import MealList from "../components/MealList";
import { CATEGORIES, MEALS } from "../data/dummy-data";

const CategoryMealsScreen = ({ navigation, route }) => {
  const { categoryId } = route.params;

  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  return <MealList listData={displayedMeals} navigation={navigation} />;
};

export default CategoryMealsScreen;
