import { useState, useRef } from 'react';
import { StyleSheet, TextInput, Text, Button, View, Pressable } from 'react-native';


export default function Form({ addItem }) {
    const [text, setValue] = useState('');
    const inputEl = useRef(null)

    const onChange = (text) => {
        setValue(text);
    };

    const handlerButton = () => {
        addItem(text)
        inputEl.current.clear();
    }


    return (
        <View style={styles.wrapper}>
            <TextInput
                style={styles.input}
                onChangeText={onChange}
                placeholder='Enter the task'
                ref={inputEl}
            />
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
    wrapper: {
        fontSize: 5,
        alignItems: 'center',
        marginHorizontal: '20%'
    },
    input: {
        width: '100%',
        color: '#FFFFFF',
        borderBottomWidth: 1,
        borderColor: '#FFFF00',
        padding: 10,
        marginVertical: 10,
        alignItems: 'left'
    },
    button: {
        width: '50%',
        backgroundColor: '#2F4F4F',
        paddingHorizontal: 20,
        paddingVertical: 2,
        borderWidth: 1,
        borderColor: '#FFFF00',
        borderRadius: 10,
        marginBottom: 20
    }
});