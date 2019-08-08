import React, { Component } from "react";
import { Platform, StyleSheet, Text, PermissionsAndroid } from "react-native";
import Home from "./src/screens/Home";
export default class App extends Component {
  render() {
    return <Home />;
  }
}
