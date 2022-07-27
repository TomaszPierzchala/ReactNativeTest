
import React, { useState } from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {
  
  return (
    <View style={styles.body}>
      <View style={styles.row}>
        <View style={styles.col1}>
          <Text style={styles.text}>1</Text>
        </View>
        <View style={styles.col2}>
          <Text style={styles.text}>2</Text>
        </View>
        <View style={styles.col3}>
          <Text style={styles.text}>3</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.col4}>
          <Text style={styles.text}>4</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.col5}>
          <Text style={styles.text}>5</Text>
        </View>
      </View>
      <View style={styles.big_row}>
        <View style={styles.col6}>
          <Text style={styles.text}>6</Text>
        </View>
        <View style={styles.col7}>
          <Text style={styles.text}>7.2</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  row: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  big_row: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  col1: {
    flex: 1,
    backgroundColor: '#00ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  col2: {
    flex: 2,
    backgroundColor: '#f0f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  col3: {
    flex: 3,
    backgroundColor: '#ff0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  col4: {
    flex: 1,
    backgroundColor: '#f00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  col5: {
    flex: 1,
    backgroundColor: '#0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  col6: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  col7: {
    flex: 1,
    backgroundColor: '#00f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 35,
    fontStyle: 'italic',
    margin: 10,
  },
});

export default App;
