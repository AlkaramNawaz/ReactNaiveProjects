import React from "react";
import { createAppContainer } from "react-navigation";
import AppNavigator from "./AppNavigator";

export default createAppContainer(AppNavigator);

// //Switch Navigator
// const SwitchNavigator = createSwitchNavigator(
//   {
//     Login: Login,
//     Home: Home
//   },
//   {
//     initialRouteName: "Login"
//   }
// );

// //Stack Navigator
// const StackNavigator = createStackNavigator(
//   {
//     Login: Login,
//     Home: Home
//   },
//   {
//     initialRouteName: "Login"
//   }
// );
