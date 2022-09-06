import { useState } from 'react';
import { StyleSheet, TextInput, Text, Button, View } from 'react-native';


export default function Form({addItem}) {
    const [text, setValue] = useState('');

    const onChange = (text) => {
        setValue(text);
    };

    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={onChange}
                placeholder='Напишите задачу'
            />
            <Button
                color='red'
                onPress={() => addItem(text)}
                title='Добавить задачу'
            />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderColor: 'green',
        padding: 10,
        marginVertical: 10,
        marginHorizontal: '20%',
    }
});