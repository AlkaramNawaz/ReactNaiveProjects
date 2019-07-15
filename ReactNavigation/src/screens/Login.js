import React from "react";
import { View, Text, Button } from "react-native";

class Login extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Login Screen</Text>
        <Button
          title={"Goto Home"}
          onPress={() => {
            navigate("Home");
          }}
        />
      </View>
    );
  }
}

export default Login;
