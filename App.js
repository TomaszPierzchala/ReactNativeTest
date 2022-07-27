
import React, { useState } from 'react';

import {
  RefreshControl,
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {
  const [Items, setItems] = useState([
    { title: 'Title 1', data: ["1-1","1-2","1-3","1-4"] },
    { title: 'Title 2', data: ["2-1","2-2","2-3","2-4"] },
    { title: 'Title 3', data: ["3-1","3-2","3-3","3-4"] },
    { title: 'Title 4', data: ["4-1","4-2","4-3","4-4"] },
    { title: 'Title 5', data: ["5-1","5-2","5-3","5-4"] },
    { title: 'Title 6', data: ["6-1","6-2","6-3","6-4"] },
  ])
  const [Refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    setItems([...Items, { title: 'Title A', data: ["A-1","A-2","A-3","A-4"] }]);
    setRefreshing(false);
  }
  return (
    <View style={styles.body}>
      <SectionList refreshControl={
        <RefreshControl
          refreshing={Refreshing}
          onRefresh={onRefresh}
          colors={['#a00','#730','#460','#190','#0c0']}
        />}
        keyExtractor={(item, idx) => idx.toString()}
        sections = {Items}
        renderItem={
          ({item}) => (
            <View style={styles.item}>
            <Text style={styles.text}>{item}</Text>
            </View>
          )
        }
        
        renderSectionHeader={
          ({section})=>(
            <View style={styles.item_header}>
            <Text style={styles.text}>{section.title}</Text>
            </View>
          )
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  item_header: {
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
    height: 75,
    margin: 20,
  },
  item: {
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    margin: 20,
  },
  text: {
    color: 'green',
    fontSize: 30,
    fontStyle: 'italic',
  },
});

export default App;
