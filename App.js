import * as React from 'react';
import { Button, View, Text, Pressable, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const onPressed = ({ pressed }) => ([{ backgroundColor: pressed ? '#aaa' : "aliceblue" },
{ borderWidth: 1, borderRadius: 20 },
]);

const MyButton = (props) => {

  return (
    <View style={{ marginBottom: 10 }}>
      <Pressable
        onPress={props.goto}
        style={onPressed}
      >
        <Text style={styles.text}>
          {props.name}
        </Text>
      </Pressable>
    </View>
  )
}

function HomeScreen( {navigation} ) {
  return (
    <View style={styles.body}>
      <MyButton name={'Go to Profile'} goto={() => navigation.navigate('Profile')} />
    </View>
  );
}

function ProfileScreen({ navigation }) { // <<< important "navigation" prop ! <<<
  return (
    <View style={styles.body}>
      <View>
        <MyButton name={'Go to Notifications'} goto={() => navigation.navigate('Notifications')} />
      </View>
      <View>
        <MyButton name={'Go back'} goto={() => navigation.goBack()} />
      </View>
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={styles.body}>
      <View>
        <MyButton name={'Go to Settings'} goto={() => navigation.navigate('Settings')} />
      </View>
      <View>
        <MyButton name={'Go back'} goto={() => navigation.goBack()} />
      </View>
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={styles.body}>
      <MyButton name={'Go back'} goto={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      // screenOptions={{header: ()=>null}} // removes heder if needed
    >
      <Stack.Screen name="Home" component={HomeScreen} 
        // options={{header: ()=>null}} // removes heder if needed
      />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

export default App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10,
  }
})
