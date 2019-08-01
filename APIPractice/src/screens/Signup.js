import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from "react-native";
import { ShowLoading } from "../components/ShowLoading";
import axios from "axios";
import { baseUrl } from "../api/DBHandler";

class Signup extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    username: "",
    password: "",
    name: "",
    loading: false
  };

  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  };

  signUp = async () => {
    this.toggleLoading();
    const { username, password, name } = this.state;
    if (username === "" || password === "" || name === "") {
      this.toggleLoading();
      console.warn("Please fill the form");
    } else {
  
      const params = {
        name: this.state.name,
        username: this.state.username,
        password: this.state.password
      };

      const res = await axios.post(
        baseUrl + "signup.php",
        JSON.stringify(params)
      );
      console.warn(res.data);
    }
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.appContainer}>
        <ShowLoading
          visible={this.state.loading}
          loadingMsg={"Signing up..."}
        />
        <Text style={styles.loginText}>Signup</Text>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Name"
          value={this.state.name}
          onChangeText={text => {
            this.setState({ name: text });
          }}
        />
        <TextInput
          style={[styles.textInputStyle, { marginTop: 20 }]}
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
            this.signUp();
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
