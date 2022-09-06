import { StyleSheet, TouchableHighlight, Text } from 'react-native';

export default function ListItem({ item }) {
    return (
        <TouchableHighlight>
            <Text style={styles.text}>{item.text}</Text>
        </TouchableHighlight>
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