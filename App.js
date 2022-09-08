import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import Form from './components/Form';
import Header from './components/Header';
import ListItem from './components/ListItem';

export default function App() {

  const [listOfItems, setListOfItems] = useState([
    { text: 'JavaScript, TypeScript', key: '1' },
    { text: 'React (React-hooks)', key: '2' },
    { text: 'React Native', key: '3' },
    { text: 'React Navigation', key: '4' },
    { text: 'Redux/Redux ToolKit', key: '5' },
  ])

  const addItem = (text) => {
    setListOfItems((list) => {
      return [
        { text: text, key: Math.random().toString(36).substring(7) },
        ...list
      ]
    });
  };

  const deleteItem = (key) => {
    setListOfItems((list) => {
      return list.filter(listOfItems => listOfItems.key != key)
    });
  };


  return (
    <View style={styles.wrapper}>
      <Header />
      <Form addItem={addItem} />
      <View>
        <FlatList
          data={listOfItems}
          renderItem={({ item }) => (
            <ListItem item={item} deleteItem={deleteItem} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#000000',
    flex: 1
  }
});