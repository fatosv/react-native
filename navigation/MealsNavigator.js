import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-gesture-handler";
import { Platform } from "react-native";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import Colors from "../constants/Colors";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const Stack = createNativeStackNavigator();

const MealsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? Colors.primary : "white",
        },
        headerTintColor: Platform.OS === "android" ? "#fff" : Colors.primary,
      }}
    >
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "Meal Categories",
        }}
      />
      <Stack.Screen
        name="CategoryMeals"
        component={CategoryMealsScreen}
        options={({ route }) => ({ title: route.params.name })}
      />
      <Stack.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={
          (({ route }) => ({ title: route.params.name }),
          {
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title="Favorite"
                  iconName="ios-star"
                  onPress={() => {
                    console.log("Mark as favorite");
                  }}
                />
              </HeaderButtons>
            ),
          })
        }
      />
    </Stack.Navigator>
  );
};

export default MealsNavigator;
