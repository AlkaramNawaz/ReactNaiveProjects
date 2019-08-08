import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import Home from "./src/screens/Home.js";
import store from "./src/redux/store";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}
