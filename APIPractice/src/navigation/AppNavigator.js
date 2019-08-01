import React from "react";
import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Home from "../screens/Home";

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
    App: Home
  },
  {
    initialRouteName: "App"
  }
);

App.navigationOptions = {
  header: null
};

export default createAppContainer(
  createSwitchNavigator(
    {
      Auth: Auth,
      App: App
    },
    {
      initialRouteName: "Auth"
    }
  )
);
