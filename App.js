
import React, { useState } from 'react';

import {
  Button,
  RefreshControl,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const App = () => {

  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const onPressHandler = () => {
    setSubmitted(!submitted);
  }
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
      {/* <Button
        title={submitted? 'Clear' : 'Submit'}
        onPress={onPressHandler}
        color='green'
      /> */}
      <TouchableHighlight // <TouchableWithoutFeedback
        style={styles.button}
        onPress={onPressHandler}
        activeOpacity={0.4}
        underlayColor='green'
      >
        <Text style={styles.text}>
        {submitted? 'Clear' : 'Submit'}
        </Text>
      </TouchableHighlight>
      {submitted?
      <Text style={styles.text}>
        You typed : {name}
      </Text>
      : null}
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
    margin: 10,
  },
  button: {
    width: 150, height: 50,
    backgroundColor: 'yellow',
    alignItems: 'center',
  }
});

export default App;
