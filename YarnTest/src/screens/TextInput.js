import React, { Component } from "react";
import { View, StyleSheet, TextInput, Button, Text, Image } from "react-native";
import { Input } from "react-native-elements";
class YarnTest extends Component {
  state = {
    Text: ""
  };
  render() {
    return (
      <View style={styles.appContainer}>
        <Text style={styles.textdesign}>Design</Text>
        <View>
          <TextInput>
            value={this.state.text}
            onChangeText=
            {text => {
              this.setState({ text });
            }}
            placeholder:"UserName"
          </TextInput>
          <TextInput>
            value={this.state.text}
            onChangeText=
            {text => {
              this.setState({ text });
            }}
            placeholder:"Password"
          </TextInput>
        </View>
        <View style={styles.textContainer}>
          <Input type="checkbox" Text="Remember me" Text="FOrget Password" />
          />
        </View>
        <Button title={"Log In"} style={{ backgroundColor: "blue" }} />
        <Button title={"Sign Up"} style={{ backgroundColor: "blue" }} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  textdesign: {
    fontSize: 35,
    justifyContent: "center"
  },
  textContainer: {
    flexDirection: "row",
    padding: 15
  }
});
export default YarnTest;
