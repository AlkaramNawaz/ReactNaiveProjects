import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

class Signup extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    username: "",
    password: "",
    phone_number: "",
    country: ""
  };

  storeUserInfo = async () => {
    const { username, password, phone_number, country } = this.state;
    try {
      await AsyncStorage.setItem("username", username);
      await AsyncStorage.setItem("password", password);
      await AsyncStorage.setItem("phone_number", phone_number);
      await AsyncStorage.setItem("country", country);
     // console.warn("information saved");
      this.setState({
        username: "",
        password: "",
        phone_number: "",
        country: ""
      });
    } catch (error) {
      alert(error);
    }
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.appContainer}>
        <Text style={styles.loginText}>Signup</Text>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Username"
          value={this.state.username}
          onChangeText={text => {
            this.setState({ username: text });
          }}
        />
        <TextInput
          style={[styles.textInputStyle, { marginTop: 20 }]}
          placeholder="Password"
          value={this.state.password}
          secureTextEntry
          onChangeText={text => {
            this.setState({ password: text });
          }}
        />
        <TextInput
          style={[styles.textInputStyle, { marginTop: 20 }]}
          placeholder="Phone number"
          value={this.state.phone_number}
          onChangeText={text => {
            this.setState({ phone_number: text });
          }}
        />
        <TextInput
          style={[styles.textInputStyle, { marginTop: 20 }]}
          placeholder="Country"
          value={this.state.country}
          onChangeText={text => {
            this.setState({ country: text });
          }}
        />
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            this.storeUserInfo();
          }}
        >
          <Text style={{ color: "white", fontSize: 16 }}>Get Started</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ top: 30 }}
          onPress={() => {
            navigate("Login");
          }}
        >
          <Text style={{ color: "black", fontSize: 16 }}>
            Already have an account ? Login
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10
  },
  loginText: {
    fontSize: 22,
    color: "black",
    bottom: 30
  },
  textInputStyle: {
    width: "70%",
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    textAlign: "center",
    top: 20
  },
  loginButton: {
    backgroundColor: "green",
    borderRadius: 10,
    borderWidth: 1,
    width: "50%",
    height: 40,
    marginTop: 50,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Signup;
