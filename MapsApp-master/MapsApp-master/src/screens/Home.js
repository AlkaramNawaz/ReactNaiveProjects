import React, { Component } from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { View, Text, StyleSheet, PermissionsAndroid } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
export default class Home extends Component {
  //   componentDidMount() {
  //     navigator.geolocation.getCurrentPosition(
  //       position => {
  //         console.log("wokeeey");
  //         console.log(position);
  //         this.setState({
  //           latitude: position.coords.latitude,
  //           longitude: position.coords.longitude,
  //           error: null
  //         });
  //       },
  //       error => this.setState({ error: error.message }),
  //       { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 }
  //     );
  //   }
  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        // provider={PROVIDER_GOOGLE}
        onMapReady={() => {
          PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
          ).then(granted => {
            console.warn("Permission " + JSON.stringify(granted)); // just to ensure that permissions were granted
          });
        }}
        initialRegion={{
          latitude: 32.082466,
          longitude: 72.669128,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        showsUserLocation={true}
        showsMyLocationButton={true}
        showsCompass={true}
        toolbarEnabled={true}
        zoomEnabled={true}
        rotateEnabled={true}
        showsBuildings
      />
    );
  }
}
