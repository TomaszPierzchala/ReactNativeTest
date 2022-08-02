
import React, { useState } from 'react';

import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Modal,
  Image,
  ImageBackground,
} from 'react-native';
import MyButtom from './src/CustomButton';
import Header from './src/Header';

const App = () => {

  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showModalWarning, setShowWarning] = useState(false);

  const onPressHandler = () => {
    if (name.length > 2) {
      setSubmitted(!submitted);
    } else {
      setShowWarning(true)
    }
  }
  return (
    <ImageBackground
      style={styles.body}
      source={{ uri: 'https://cdn.pixabay.com/photo/2013/07/12/12/35/texture-145968_960_720.png' }}
    >
      <Header/>
      <Modal
        visible={showModalWarning}
        transparent
        onRequestClose={() => setShowWarning(false)}
        animationType='slide'
        hardwareAccelerated
      >
        <View style={styles.modal_centered}>
          <View style={styles.modal_warning}>
            <View style={styles.warning_title}>
              <Text style={styles.modal_text}>WARNING !</Text>
            </View>
            <View style={styles.warning_body}>
              <Text style={styles.modal_text}>The name must be longer then 2 characters</Text>
            </View>
            <Pressable style={styles.ok}
              android_ripple={{ color: '#00f' }}
              onPress={() => setShowWarning(false)}>
              <Text style={styles.modal_text}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Text style={styles.text}>
        Please insert your name:
      </Text>
      <TextInput style={styles.input}
        placeholder='e.g. Tom'
        onChangeText={(val) => setName(val)}
        keyboardType='number-pad'
      />
      <MyButtom
      onPressFunction={onPressHandler}
      title={submitted ? 'Clear' : 'Submit'}
      color='#0f0'
      />
      <MyButtom
      onPressFunction={onPressHandler}
      title={submitted ? 'Clear' : 'Submit'}
      color='purple'
      text_style={{color: '#eee'}}
      style={{margin: 10}}
      />
      {/* <Pressable
        onPress={onPressHandler}
        style={
          ({ pressed }) => [styles.button,
          { backgroundColor: pressed ? 'grey' : '#0f0' }
          ]
        }
        hitSlop={{ top: 10, bottom: 15 }}
      >
        <Text style={styles.text}>
          {submitted ? 'Clear' : 'Submit'}
        </Text>
      </Pressable> */}
      {
        submitted ?
          <View style={styles.body}>
            <Text style={styles.text}>
              You typed : {name}
            </Text>
            <Image
              style={styles.image_done}
              source={require('./assets/done.png')}
            // resizeMode='stretch'
            />
          </View>
          :
          <Image
            style={styles.image_error}
            source={require('./assets/error.png')}
            resizeMode='stretch'
            blurRadius={2}
          />
      }
    </ImageBackground >
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
  modal_text: {
    fontSize: 20,
    fontStyle: 'italic',
    margin: 5,
    textAlign: 'center'
  },
  input: {
    borderWidth: 1,
    borderRadius: 20,
    width: 220,
    padding: 9,
    margin: 10,
  },
  modal_centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0044ee55'
  },
  modal_warning: {
    width: 300,
    height: 200,
    backgroundColor: '#0489',
    borderWidth: 2,
    borderColor: "#00a",
    borderRadius: 40,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  warning_title: {
    height: 50,
    width: 300,
    backgroundColor: 'yellow',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    justifyContent: 'center',
  },
  warning_body: {
    height: 90,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ok: {
    width: 50,
    height: 40,
    backgroundColor: 'skyblue',
    borderRadius: 15,
  },
  image_error: {
    width: 80,
    height: 72,
    margin: 20,

  },
  image_done: {
    width: 80,
    height: 80,
    margin: 20,

  }
});

export default App;
