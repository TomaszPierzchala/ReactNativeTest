
import React, { useState } from 'react';

import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const App = () => {

  const [name, setName] = useState('');
  const [submitted, setSubmittedg] = useState(false);
  const onPressHandler = () => {
    if(name.length > 2) {
    setSubmitted(!submitted);
    } else {
      Alert.alert('Warning', 'The name must be longer than 2 characters',
      [{text:'OK', onPress: ()=> console.warn('OK Pressed')}],
      {cancelable: true, onDismiss: ()=>console.info('Aler is colosed')}
      )
    }
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
      {/* <TouchableHighlight // <TouchableWithoutFeedback
        style={styles.button}
        onPress={onPressHandler}
        activeOpacity={0.4}
        underlayColor='green'
      > */}
      <Pressable
        onPress={onPressHandler}
        style={
          ({ pressed }) => [ styles.button,
            { backgroundColor: pressed ? 'grey' : '#0f0' }
          ]
        }
        hitSlop={{top: 10, bottom:15}}
        >
        <Text style={styles.text}>
          {submitted ? 'Clear' : 'Submit'}
        </Text>
      </Pressable>
      {submitted ?
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
