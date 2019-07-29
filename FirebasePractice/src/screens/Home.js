import React, { Component } from "react";
import { View, Text, Button, SectionList } from "react-native";
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
      <View style={{ flex: 1, padding: 20 }}>
        {/* <Text>Home Screen</Text>
        <Button title={"Save Data"} onPress={() => this.saveDataToDB()} /> */}
        <SectionList
          sections={[
            { title: "A", data: ["Ali", "Alkaram", "Aslam"] },
            { title: "B", data: ["Bilal", "Alkaram", "Aslam"] },
            { title: "C", data: ["Ali", "Alkaram", "Aslam"] },
            { title: "D", data: ["Ali", "Alkaram", "Aslam"] }
          ]}
          renderItem={({item,index}) => {
            return(
              <Text key={index}>Override{item}</Text>
            )
          }}
          renderSectionHeader={({section:{title}}) => (
            <Text style={{fontWeight: 'bold'}}>{title}</Text>
          )}
        />
      </View>
    );
  }
}

export default Home;
