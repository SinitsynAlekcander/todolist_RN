import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';

export default function ListItem({ item, deleteItem }) {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.text}>
                {item.text}
            </Text>
            <TouchableOpacity onPress={() => deleteItem(item.key)}>
                <Image
                    style={styles.image}
                    source={require('../assets/karzina.png')}
                />
            </TouchableOpacity>
        </View >
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
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
        flex: 1,
        // textAlign: 'center'
    },
    image: {
        width: 24,
        height: 24
    }
});