import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";

const AppStack = createStackNavigator();

const Main = () => {

  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
