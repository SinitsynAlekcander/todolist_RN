import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View, StatusBar, SafeAreaView, ActivityIndicator } from 'react-native';
import Footer from './Footer';
import Form from './Form';
import Header from './Header';
import ListItem from './ListItem';
import axios from "axios";

export default function Main({ navigation }) {

    const [isLoading, setIsLoading] = useState(true);
    const [listOfItems, setListOfItems] = useState();

    const fetchToDo = () => {
        setIsLoading(true);
        axios
            .get("https://631daaae789612cd07ae4c96.mockapi.io/todo")
            .then(({ data }) => setListOfItems(data))
            .catch((err) => {
                console.log('ERROR');
                alert("Ошибка");
            })
            .finally(() => setIsLoading(false))
    };

    useEffect(fetchToDo, [])

    if (isLoading) {
        return (
            <View style={styles.isLoading}>
                <ActivityIndicator size="large" />
            </View>
        )
    }

    const addItem = (text) => {
        setListOfItems((list) => {
            return [
                { text: text, key: Math.random().toString(36).substring(7), completed: true },
                ...list
            ]
        });
    }

    const deleteItem = (key) => {
        setListOfItems((list) => {
            return list.filter(listOfItems => listOfItems.key != key)
        });
    }

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
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.wrapper}>
                <StatusBar barStyle="light-content" />
                <Header />
                <Form addItem={addItem} />
                <FlatList
                    data={listOfItems}
                    renderItem={({ item }) => (
                        <ListItem
                            item={item}
                            doneItem={doneItem}
                            deleteItem={deleteItem}
                        />
                    )}
                />
                <Footer navigation={navigation} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: '#000000'
    },
    wrapper: {
        flex: 1,
        backgroundColor: '#000000'
    },
    isLoading: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    }
});