import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { increment } from "../redux/actions/increment";
import { decrement } from "../redux/actions/decrement";

class Home extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row"
        }}
      >
        <Text style={{ fontSize: 50 }} onPress={() => this.props.increase()}>
          {" "}
          +{" "}
        </Text>
        <Text style={{ fontSize: 50 }}>{this.props.counter}</Text>
        <Text style={{ fontSize: 50 }} onPress={() => this.props.decrease()}>
          {" "}
          -{" "}
        </Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counterReducer.counter
  };
};

const mapDisptachtoProps = dispatch => ({
  increase: () => dispatch({ type: "INCREMENT" }),
  decrease: () => dispatch({ type: "DECREMENT" })
});

export default connect(
  mapStateToProps,
  mapDisptachtoProps
)(Home);
