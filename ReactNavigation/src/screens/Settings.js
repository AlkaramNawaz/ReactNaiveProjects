import React from "react";
import { View, Text } from "react-native";

class Setting extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Setting Screen</Text>
      </View>
    );
  }
}

export default Setting;
