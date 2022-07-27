
import React, { useState } from 'react';

import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {
  const [Items, setItems] = useState([
    { key: 1, i: 'Item 1' },
    { key: 2, i: 'Item 2' },
    { key: 3, i: 'Item 3' },
    { key: 4, i: 'Item 4' },
    { key: 5, i: 'Item 5' },
    { key: 6, i: 'Item 6' },
    { key: 7, i: 'Item 7' },
    { key: 8, i: 'Item 8' },
    { key: 9, i: 'Item 9' },
    { key: 10, i: 'Item 10' },
  ]);
  const [Refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    setItems([...Items, { key: 69, i: 'Nowy 123' }]);
    setRefreshing(false);
  }
  return (
    <View style={styles.body}>
      <ScrollView refreshControl={
        <RefreshControl
          refreshing={Refreshing}
          onRefresh={onRefresh}
          colors={['#a00','#730','#460','#190','#0c0']}
        />
      }>
        {
          Items.map((i) => {
            return (
              <View style={styles.item} key={i.key}>
                <Text style={styles.text}>{i.i}</Text>
              </View>
            )
          })
        }
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  item: {
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    height: 75,
    margin: 20,
  },

  text: {
    color: 'purple',
    fontSize: 30,
    fontStyle: 'italic',
  },
});

export default App;
