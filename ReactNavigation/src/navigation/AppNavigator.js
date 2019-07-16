import React from "react";
import {
  createSwitchNavigator,
  createStackNavigator
} from "react-navigation";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Signup from "../screens/Signup";

const Auth = createStackNavigator(
  {
    Login: Login,
    Signup: Signup
  },
  {
    initialRouteName: "Login"
  }
);

const App = createStackNavigator(
  {
    Home: Home
  },
  {
    initialRouteName: "Home"
  }
);

export default createSwitchNavigator(
  {
    Auth: Auth,
    App: App
  },
  {
    initialRouteName: "Auth"
  }
);
