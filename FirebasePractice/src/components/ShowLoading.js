import React from "react";
import { ActivityIndicator, View, Text } from "react-native";

//Resuseable component for showing any loading message
export const ShowLoading = ({ visible, loadingMsg }) =>
  visible ? (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255,255,255,0.6)",
        position: "absolute",
        zIndex: 2
      }}
    >
      <Text style={{ fontSize: 16 }}>{loadingMsg}</Text>
      <ActivityIndicator size={"large"} color={"red"} />
    </View>
  ) : (
    <View />
  );
