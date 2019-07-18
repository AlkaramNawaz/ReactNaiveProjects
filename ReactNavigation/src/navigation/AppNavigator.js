import React from "react";
import { createSwitchNavigator, createStackNavigator } from "react-navigation";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import BottomTabs from "../navigation/BottomTabs";

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
    App: BottomTabs
  },
  {
    initialRouteName: "App"
  }
);

App.navigationOptions = {
  header: null
};

export default createSwitchNavigator(
  {
    Auth: Auth,
    App: App
  },
  {
    initialRouteName: "Auth"
  }
);
