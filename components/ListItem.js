import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default function ListItem({ item, deleteItem }) {
    return (
        <TouchableOpacity onPress={() => deleteItem(item.key)}>
            <View style={styles.wrapper}>
                <Text style={styles.text}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#000000',
        borderColor: '#FFFF00',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginTop: 10,
        marginHorizontal: '20%'
    },
    text: {
        color: 'white',
        // textAlign: 'center'
    }
});