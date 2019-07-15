import React from "react";
import {
  createSwitchNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";
import Home from "../screens/Home";
import Login from "../screens/Login";

//Switch Navigator
const SwitchNavigator = createSwitchNavigator(
  {
    Login: Login,
    Home: Home
  },
  {
    initialRouteName: "Login"
  }
);

//Stack Navigator
const StackNavigator = createStackNavigator(
  {
    Login: Login,
    Home: Home
  },
  {
    initialRouteName: "Login"
  }
);

export default createAppContainer(StackNavigator);
