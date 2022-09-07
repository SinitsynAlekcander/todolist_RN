import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import Form from './components/Form';
import Header from './components/Header';
import ListItem from './components/ListItem';



export default function App() {

  const [listOfItems, setListOfItems] = useState([
    { text: 'Купить продукты', key: '1' },
    { text: 'Изучение React Native', key: '2' },
    { text: 'Изучение Англ.языка', key: '3' }])

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
    <View>
      <Header />
      <Form addItem={addItem} />
      <View>
        <FlatList
          data={listOfItems}
          renderItem={({ item }) => (
            <ListItem item={item} deleteItem={deleteItem}/>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

});