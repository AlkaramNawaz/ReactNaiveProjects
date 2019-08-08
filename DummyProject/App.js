import React, { Component } from "react";
import AppNavigator from "./src/navigation/AppNavigator";
import DBHandler from "./src/api/DBHandler";

export default class App extends Component {
  componentDidMount() {
    DBHandler.init();
  }

  render() {
    return <AppNavigator />;
  }
}
