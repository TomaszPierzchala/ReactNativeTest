
import React, { useState } from 'react';

import {
  RefreshControl,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const App = () => {

  const [name, setName] = useState('');
  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        Please insert your name:
      </Text>
      <TextInput style={styles.input}
        placeholder='e.g. Tom'
        onChangeText={(val) => setName(val)}
        keyboardType='number-pad'
      />
      <Text style={styles.text}>
        You typed : {name}
      </Text>
    </View>
  )
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },

  text: {
    color: 'green',
    fontSize: 25,
    fontStyle: 'italic',
    margin: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 20,
    width: 220,
    padding: 9,

  }
});

export default App;
