/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';

import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {
  const [turn, setTurn] = useState(0)
  const [sum, setSum] = useState(0)
  const sumIncreaseHandler = () => {
    //turn+=1
    //sum=5*turn
    setTurn(turn+1)
    setSum(sum+5)
  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Sum : {sum}</Text>
      <Button title='Clik Me' onPress={sumIncreaseHandler}></Button>
      <Text style={styles.text}>Turns : {turn}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#9b1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#60b',
    margin: 6,
    fontSize: 22,
  }
});

export default App;
