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
                    source={require('../assets/deleteImage.png')}
                />
            </TouchableOpacity>
        </View >
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
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
        paddingVertical: 5
    },
    image: {
        width: 24,
        height: 24
    }
});