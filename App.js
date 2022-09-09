import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import Form from './components/Form';
import Header from './components/Header';
import ListItem from './components/ListItem';

export default function App() {

  const [listOfItems, setListOfItems] = useState([
    { text: 'JavaScript, TypeScript1', key: '1', completed: false },
    { text: 'React (React-hooks)', key: '2', completed: true },
    { text: 'React Native', key: '3', completed: false },
    { text: 'React Navigation', key: '4', completed: true },
    { text: 'Redux/Redux ToolKit', key: '5',  completed: false},
  ])
  // const [crossedOut, setCrossedOut] = useState(false)

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

  const doneItem = (key) => {
    setListOfItems((list) => {
      return list.map((item) => {
        if(item.key === key) {
          return {
            ...item,
            completed: !item.completed
          }
        } 
        return item
      })
    });
  }


//   setListOfItems('text (CROSSED OUT)');
//   setCrossedOut(true)
// }

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
  </View>
);
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#000000',
    flex: 1
  }
});