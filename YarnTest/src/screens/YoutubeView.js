import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";
import Youtube from "../shared/YoutubeItem";
import YoutubeItem from "../shared/YoutubeItem";
const styles = StyleSheet.create({
  appContainer: {
    flex: 1
  }
});
class YoutubeLayout extends Component {
  state = {
    YOUTUBE: YoutubeItem
  };
  pressListItem = name => {
    alert(name + " pressed");
  };
  renderYOtubeItem = props => {
    return (
      <View>
        <View style={{ witdh: 100, height: 30, marginTop: "5" }}>
          Image2= {props.item.image}
        </View>
        <ListItem
          leftAvatar={props.item.image}
          title={props.item.name}
          subtitle={props.item.description}
          onPress={() => {
            this.pressListItem(props.item.name);
          }}
        />
      </View>
    );
  };
  render() {
    return (
      <View style={styles.appContainer}>
        <FlatList
          data={this.state.YoutubeItem}
          renderItem={this.renderYOtubeItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  }
}

export default YoutubeLayout;
