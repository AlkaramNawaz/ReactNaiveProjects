import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Home extends Component {
 
    state = {
        counter: 0
    }

    increment = () => {
        this.setState({
            counter: `${this.state.counter+1}`
        })
    }

    decrement = () => {
        this.setState({
            counter: `${this.state.counter-1}`
        })
    }

  render() {
    return (
      <View style={{flex: 1,justifyContent: 'center',alignItems: 'center',flexDirection: 'row'}}>
        <Text style={{fontSize: 22}} onPress={() => this.increment()}> + </Text>
        <Text style={{fontSize: 25}}>{this.state.counter}</Text>
        <Text style={{fontSize: 22}} onPress={() => this.decrement()}> - </Text>
      </View>
    );
  }
}

export default Home;
