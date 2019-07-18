import React from "react";
import { View, Text } from "react-native";

class Account extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Accont Screen</Text>
      </View>
    );
  }
}

export default Account;
