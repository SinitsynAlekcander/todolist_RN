import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function ListItem({ item, deleteItem }) {
    return (
        <TouchableOpacity onPress={() => deleteItem(item.key)}>
            <Text style={styles.text}>{item.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        padding: 10,
        textAlign: 'center',
        backgroundColor: '#A9A9A9',
        borderWidth: 1,
        borderColor: 'black',
        // borderRadius: 10,
        marginTop: 10,
        marginHorizontal: '20%'
    }
});