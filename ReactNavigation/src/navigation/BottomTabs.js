import React from "react";
import {
  createBottomTabNavigator,
  createStackNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "../screens/Home";
import Setting from "../screens/Settings";
import Account from "../screens/Account";

const HomeNavigator = createStackNavigator(
  {
    Home: Home
  },
  {
    initialRouteName: "Home"
  }
);

HomeNavigator.navigationOptions = {
  title: "Home"
};

const SettingNavigator = createStackNavigator(
  {
    Setting: Setting
  },
  {
    initialRouteName: "Setting"
  }
);

const AccountNavigator = createStackNavigator(
  {
    Account: Account
  },
  {
    initialRouteName: "Account"
  }
);

const BottomTabs = createBottomTabNavigator(
  {
    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name={"home"} color={tintColor} size={25} />
        )
      }
    },
    Setting: {
      screen: SettingNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <AntDesign name={"setting"} color={tintColor} size={25} />
        )
      }
    },
    Account: {
      screen: AccountNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons
            name={"account"}
            color={tintColor}
            size={25}
          />
        )
      }
    }
  },
  {
    initialRouteName: "Home",
    tabBarOptions: {
      labelStyle: {
        fontSize: 14
      }
    }
  }
);

export default BottomTabs;
