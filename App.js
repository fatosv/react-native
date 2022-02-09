import "react-native-gesture-handler";
import React from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./navigation/TabNavigator";
import FilterNavigator from "./navigation/FilterNavigator";
import Colors from "./constants/Colors";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import mealsReducer from "./store/reducers/meals";

const rootReducer = combineReducers({
  meals: mealsReducer,
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  const Drawer = createDrawerNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            drawerActiveTintColor: Colors.accent,
            headerShown: false,
            drawerLabelStyle: {
              fontFamily: "open-sans-bold",
            },
          }}
        >
          <Drawer.Screen
            name="MealsFavs"
            component={TabNavigator}
            options={{ title: "Meals" }}
          />
          <Drawer.Screen name="Filters" component={FilterNavigator} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
