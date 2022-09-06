import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';

export default function App() {

  const [listOfItems, setListOfItems] = useState([
    {
      text: 'Купить продукты',
      id: 1
    },
    {
      text: 'Изучение React Native',
      id: 2
    },
    {
      text: 'Изучение Англ.языка',
      id: 3
    },
  ])

  return (
    <View>
      <Header />
      <View>
        <FlatList
          data={listOfItems}
          renderItem={({ item }) => <ListItem item={item} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

});

{/* <ListItem item={item.text}/> */ }