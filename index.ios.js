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
  View,
  TouchableHighlight
} from 'react-native';

class TinderStoneDemo extends Component {
  constructor(){
    super();
    this.state={
      cards: [],
      cardLeft: {
        img: 'http://wow.zamimg.com/images/hearthstone/cards/enus/original/EX1_025t.png'
      },
      cardRight: {}
    }

    this.randomize = this.randomize.bind(this);
  }

  async componentWillMount(){
    let cards = await fetch('https://omgvamp-hearthstone-v1.p.mashape.com/cards/sets/Basic', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-Mashape-Key': 'PEf9uWxXX0mshDcbhNGEZYSZCtiTp1iFrizjsnE6MAlLkFma1e'
        }
      }).then((response) => response.json())

    let validCards = cards.filter((card) => card.img != null && card.imgGold != null);

    this.setState({cards: validCards});
    this.randomize()

    console.log('cards:', validCards);
  }

  randomize(){
    let validCards = this.state.cards;
    let cardLeft = validCards[Math.floor(Math.random()*validCards.length)];
    let cardRight = validCards[Math.floor(Math.random()*validCards.length)];

    this.setState({cardLeft, cardRight});
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.randomize}>
          <Image
            source={{uri: this.state.cardLeft.img}}
            style={styles.card}/>
          <Image
            source={{uri: this.state.cardRight.img}}
            style={styles.card}/>
        </View>
        <View style={styles.bottomBar}>
          <TouchableHighlight onPress={this.randomize}>
            <View style={styles.icon}/>
          </TouchableHighlight>
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
