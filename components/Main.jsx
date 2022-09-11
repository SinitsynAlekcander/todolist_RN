
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View, Text, StatusBar, Pressable, SafeAreaView, ActivityIndicator, RefreshControl } from 'react-native';
import Footer from './Footer';
import Form from './Form';
import Header from './Header';
import ListItem from './ListItem';
import axios from "axios";
export default function Main({navigation}) {
    const [isLoading, setIsLoading] = useState(true);

    const [listOfItems, setListOfItems] = useState()

    const fetchToDo = () => {
        setIsLoading(true);
        axios
          .get("https://631daaae789612cd07ae4c96.mockapi.io/todo")
          .then(({ data }) => {
            setListOfItems(data);
          })
          .catch((err) => {
            console.log(err);
            alert("Ошибка");
          })
          .finally(() => {
            setIsLoading(false);
          });
      };

    useEffect(fetchToDo, [])

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

    

    if(isLoading) {
        return (
            <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size="large" />
            </View>
        )
    }
    
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
        <View style={styles.wrapper}>
            <StatusBar barStyle="light-content"/>
            <Header />
            <Form addItem={addItem} />
            <View>
                <FlatList
                    data={listOfItems}
                    refreshControl={
                        <RefreshControl
                        onRefresh={fetchToDo}
                          refreshing={isLoading}
                          colors="#ffffff"
                          tintColor="#ffffff"
                        />}
                    renderItem={({ item }) => (
                        <ListItem item={item} doneItem={doneItem} deleteItem={deleteItem} />
                    )}
                />
            </View>

            <Pressable onPress={() => {
                navigation.navigate("ProjectDescription")
            }}><Text style={{color: 'white'}}>link</Text>
            </Pressable>


            {/* <Footer /> */}

            <View style={styles.footer}>
                <Text>1232313</Text>
                <Text>1232313</Text>
            </View>
        </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#000000',
        flex: 1,
        // justifyContent: 'space-between'
    },
    footer: {
        backgroundColor: 'tomato',
        position: 'absolute',
        bottom: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        height: 100
    }
});