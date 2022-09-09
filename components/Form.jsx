import { useState, useRef } from 'react';
import { StyleSheet, TextInput, Text, Button, View, Pressable } from 'react-native';


export default function Form({ addItem }) {
    const [text, setValue] = useState('');
    const inputItem = useRef(null);

    const onChange = (text) => {
        setValue(text);
    };

    const handlerButton = () => {
        addItem(text)
        inputItem.current.clear();
    }


    return (
        <View style={styles.wrapp}>
            <View>
                <TextInput
                    style={styles.textInput}
                    onChangeText={onChange}
                    placeholder='Enter the task'
                    ref={inputItem}
                />
            </View>
            <View style={styles.button}>
                <Button
                    title='ADD'
                    color="#FFFFFF"
                    onPress={handlerButton}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapp: {
        alignItems: 'center',
        marginTop: 20,
    },
    textInput: {
        width: 230,
        color: '#FFFFFF',
        borderBottomColor: '#FFFF00',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
    },
    button: {
        width: '30%',
        backgroundColor: '#2F4F4F',
        paddingHorizontal: 20,
        paddingVertical: 2,
        borderWidth: 1,
        // borderColor: '#FFFF00',
        borderRadius: 10,
        marginBottom: 20
    }
});