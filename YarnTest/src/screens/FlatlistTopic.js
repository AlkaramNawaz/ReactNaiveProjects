import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity
} from "react-native";
import { ListItem } from "react-native-elements";
import DISHES from "../shared/dishes";

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 20
  },
  listItemContainer: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column"
  },
  imageThumbnail: {
    width: "100%",
    height: 200,
    position: "relative",
    borderRadius: 10
  }
});

class FlatListTopic extends Component {
  state = {
    dishes: DISHES
  };

  pressListItem = name => {
    alert(name + "pressed");
  };

  renderDishItem = props => {
    return (
      <View style={styles.listItemContainer}>
        <TouchableOpacity onPress={() => {this.pressListItem(props.item.name)}}>
          <Image source={props.item.image} style={styles.imageThumbnail} />
          <ListItem
            title={props.item.name}
            subtitle={props.item.description}
            leftAvatar={{ source: props.item.image }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.appContainer}>
        <FlatList
          data={this.state.dishes}
          renderItem={this.renderDishItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  }
}

export default FlatListTopic;
