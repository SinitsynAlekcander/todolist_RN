import { useState, useRef } from 'react';
import { StyleSheet, TextInput, Text, Button, View, Pressable } from 'react-native';


export default function Form({ addItem }) {
    const [text, setValue] = useState('');
    // const inputEl = useRef(null)

    const onChange = (text) => {
        setValue(text);
    };


    return (
        <View style={styles.wrapper}>
            <TextInput
                style={styles.input}
                onChangeText={onChange}
                placeholder='Enter the task'
            />
            <Pressable style={styles.button} onPress={() => addItem(text)}>
                <Text style={styles.text}>
                    ADD
                </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center'
    },
    input: {
        color: '#FFFFFF',
        borderBottomWidth: 1,
        borderColor: '#FFFF00',
        padding: 10,
        marginVertical: 10,
        marginHorizontal: '20%',
        alignItems: 'left'
    },
    button: {
        backgroundColor: '#2F4F4F',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: '#FFFF00',
        borderRadius: 10
    },
    text: {
        color: '#FFFFFF'
    }
});