import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import Form from './components/Form';
import Header from './components/Header';
import ListItem from './components/ListItem';



export default function App() {

  const [listOfItems, setListOfItems] = useState([
    { text: 'Купить продукты', id: 1 },
    { text: 'Изучение React Native', id: 2 },
    { text: 'Изучение Англ.языка', id: 3 }])

  const addItem = (text) => {
    setListOfItems((list) => {
      return [
        { text: text, id: 5 },
        ...list
      ]
    })
  };

  return (
    <View>
      <Header />
      <Form addItem={addItem} />
      <View>
        <FlatList
          data={listOfItems}
          renderItem={({ item }) => (
            <ListItem item={item} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

});