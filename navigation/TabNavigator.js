import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import MealsNavigator from "../navigation/MealsNavigator";
import FavoritesNavigator from "../navigation/FavoritesNavigator";
import Colors from "../constants/Colors";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.accent,
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: "open-sans-bold",
        },
      }}
    >
      <Tab.Screen
        name="Meals"
        component={MealsNavigator}
        options={{
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons name="ios-restaurant" size={25} color={tabInfo.color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesNavigator}
        options={{
          tabBarIcon: (tabInfo) => {
            return <Ionicons name="ios-star" size={25} color={tabInfo.color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
