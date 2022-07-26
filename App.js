/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  Button,
  Linking,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Co tam Doc?</Text>
      <Button title='Clik Me' onPress={() => {Linking.openURL("geo:37.484847,-122.148386")}}></Button>
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
