/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

class TinderStoneDemo extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.randomize}>
          <Image
            source={{uri: 'http://wow.zamimg.com/images/hearthstone/cards/enus/original/EX1_025t.png'}}
            style={styles.card}/>
          <Image
            source={{uri: 'http://wow.zamimg.com/images/hearthstone/cards/enus/original/EX1_025t.png'}}
            style={styles.card}/>
        </View>
        <View style={styles.bottomBar}>
          <View style={styles.icon}/>
          <View style={styles.iconFlex}/>
          <View style={styles.icon}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    justifyContent: 'center'
  },
  randomize:{
    flex:1,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'blue'
  },
  bottomBar:{
    height: 80,
    flexDirection: 'row',
    backgroundColor: 'yellow',
    alignItems: 'center'
  },
  card:{
    margin:10,
    height: 265,
    width: 200
  },
  icon: {
    backgroundColor: 'purple',
    width: 60,
    height: 60
  },
  iconFlex: {
    backgroundColor: 'orange',
    alignSelf: 'stretch',
    flex: 1
  }
});

AppRegistry.registerComponent('TinderStoneDemo', () => TinderStoneDemo);
