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

class Login extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    username: "",
    password: "",
    formValid: false
  };

  validateData = async () => {
    const { username, password } = this.state;
    try {
      const usernameDB = await AsyncStorage.getItem("username");
      const passwordDB = await AsyncStorage.getItem("password");
      const phone_numberDB = await AsyncStorage.getItem("phone_number");
      const countryDB = await AsyncStorage.getItem("country");
      if (usernameDB != null && passwordDB !== null) {
        //We have data
        if (username === usernameDB && password === passwordDB) {
          this.props.navigation.navigate("Home");
        } else {
          alert("Please enter values again");
        }
      } else {
        console.warn("Something went wrong");
      }
    } catch (err) {
      alert(err);
    }
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.appContainer}>
        <Text style={styles.loginText}>Login</Text>
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
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            this.validateData();
          }}
        >
          <Text style={{ color: "white", fontSize: 16 }}>Get Started</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ top: 30 }}
          onPress={() => {
            navigate("Signup");
          }}
        >
          <Text style={{ color: "black", fontSize: 16 }}>
            Not have an account ? Signup
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

export default Login;
