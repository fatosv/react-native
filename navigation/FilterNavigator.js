import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform } from "react-native";
import Colors from "../constants/Colors";
import FiltersScreen from "../screens/FiltersScreen";
import HeaderButton from "../components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

const Stack = createNativeStackNavigator();

const FilterNavigation = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? Colors.primary : "white",
        },
        headerTintColor: Platform.OS === "android" ? "#fff" : Colors.primary,
        headerTitleStyle: {
          fontFamily: "open-sans-bold",
        },
      }}
    >
      <Stack.Screen
        name="Filtered Meals"
        component={FiltersScreen}
        options={{
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Menu"
                iconName="ios-menu"
                onPress={() => {
                  navigation.toggleDrawer();
                }}
              />
            </HeaderButtons>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default FilterNavigation;
