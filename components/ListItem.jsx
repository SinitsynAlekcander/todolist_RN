import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';

export default function ListItem({ item, deleteItem, doneItem }) {

    return (
        <View style={styles.card}>
            <View style={styles.cardChangeItem}>
                <TouchableOpacity onPress={() => deleteItem(item.key)}>
                    <Image
                        style={styles.Image}
                        source={require('../assets/deleteImage.png')}
                    />
                </TouchableOpacity>
            </View >
            <View style={styles.cardItem}>
                <Text style={item.completed ? styles.cardItemText : styles.cardItemText2}>
                    {item.text}
                </Text>
                <TouchableOpacity onPress={() => deleteItem(item.key)}>
                    <Image
                        style={styles.Image}
                        source={require('../assets/deleteImage.png')}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.cardDoneImage}>
                <TouchableOpacity onPress={() => doneItem(item.key)}>
                    <Image
                        style={styles.Image}
                        source={require('../assets/image.png')}
                    />
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'red',
        marginTop: 10,
        height: 50,
        backgroundColor: '#000000',
    },
    cardChangeItem: {
        flex: 1,
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardItem: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: '#FFFF00',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#000000',
        paddingRight: 10
    },
    cardItemText: {
        color: 'white',
        paddingLeft: 10,
        // crossedOut && {TextDecoderLine: 'line-through'}
        // textDecorationLine: 'line-through'
    },
    cardItemText2: {
        color: 'red',
        paddingLeft: 10,
        // crossedOut && {TextDecoderLine: 'line-through'}
        // textDecorationLine: 'line-through'
    },
    cardDoneImage: {
        flex: 1,
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Image: {
        width: 30,
        height: 30,
    }
});