import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import DBHandler from "../api/DBHandler";

class Home extends Component {
  static navigationOptions = {
    header: null
  };

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

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button title={"Save Data"} onPress={() => this.saveDataToDB()} />
      </View>
    );
  }
}

export default Home;
