import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from "react-native";

class Signup extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    email: "",
    password: "",
    phone_number: "",
    country: "",
    loading: false
  };
  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  };

  signUp = () => {
    this.toggleLoading();
    const { email, password, phone_number, country } = this.state;
    if (
      email === "" ||
      password === "" ||
      phone_number === "" ||
      country === ""
    ) {
      this.toggleLoading();
      console.warn("Please fill the form");
    } else {
      DBHandler.auth
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          //Do what you want

          this.toggleLoading();
          this.props.navigation.navigate("Login");
        })
        .catch(err => {
          //handle errors
          this.toggleLoading();
          alert(err);
        });
    }
  };

  storeUserInfo = async () => {
    const { email, password, phone_number, country } = this.state;
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.appContainer}>
        <Text style={styles.loginText}>Signup</Text>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Email"
          value={this.state.email}
          onChangeText={text => {
            this.setState({ email: text });
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
            this.Signup();
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
