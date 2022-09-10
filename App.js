import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';
import ListItem from './components/ListItem';

export default function App() {

  const [listOfItems, setListOfItems] = useState([
    { text: 'JavaScript, TypeScript1', key: '1', completed: true },
    { text: 'React (React-hooks)', key: '2', completed: true },
    { text: 'React Native', key: '3', completed: true },
    { text: 'React Navigation', key: '4', completed: true },
    { text: 'Redux/Redux ToolKit', key: '5', completed: true },
  ])

  const addItem = (text) => {
    setListOfItems((list) => {
      return [
        { text: text, key: Math.random().toString(36).substring(7), completed: true },
        ...list
      ]
    });
  };

  const deleteItem = (key) => {
    setListOfItems((list) => {
      return list.filter(listOfItems => listOfItems.key != key)
    });
  };

  const doneItem = (key) => {
    setListOfItems((list) => {
      return list.map((item) => {
        if (item.key === key) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item
      })
    });
  }

  return (
    <View style={styles.wrapper}>
      <Header />
      <Form addItem={addItem} />
      <View>
        <FlatList
          data={listOfItems}
          renderItem={({ item }) => (
            <ListItem item={item} doneItem={doneItem} deleteItem={deleteItem} />
          )}
        />
      </View>
<Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#000000',
    flex: 1,
    // justifyContent: 'space-between'
  }
});