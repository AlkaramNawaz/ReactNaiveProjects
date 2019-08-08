import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from "react-native";

class Login extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    email: "",
    password: "",
    formValid: false,
    loading: false
  };
  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  };

  loginUser = () => {
    this.toggleLoading();
    componentDidMount = () => {};

  saveDataToDB = () => {
    alert("in");
    const UID = DBHandler.auth.currentUser.uid;
    //Making refrence to our database for saving dataa
    const ref = DBHandler.database.ref("User").child(UID);

    ref
      .set({
        name: "Alkrarm",
        rollNo: "07",
        university: "uos"
      })
      .then(() => {
        console.warn("data saved");
      })
      .catch(err => {
        alert(err);
      });
  };

    const { email, password } = this.state;

    if (email === "" || password === "") {
      this.toggleLoading();
      console.warn("Please fill the form");
    } else {
      DBHandler.auth
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          this.toggleLoading();
          this.props.navigation.navigate("App");
        })
        .catch(err => {
          this.toggleLoading();
          alert(err);
        });
    }
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.appContainer}>
        <Text style={styles.loginText}>Login</Text>
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
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            this.loginUser();
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
