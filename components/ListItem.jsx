import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';

export default function ListItem({ item, deleteItem, doneItem }) {
    return (
        <View style={styles.card}>
            <View style={styles.cardItem}>
                <Text style={item.completed ? styles.cardItemTrue : styles.cardItemFalse}>
                    {item.text}
                </Text>
                <TouchableOpacity onPress={() => deleteItem(item.key)}>
                    <Image
                        style={styles.cardImage}
                        source={require('../assets/deleteImage.png')}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.cardDoneImage}>
                <TouchableOpacity onPress={() => doneItem(item.key)}>
                    <Image
                        style={styles.cardImage}
                        source={require('../assets/doneImage.png')}
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
        marginTop: 10,
        height: 50
    },
    cardItem: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: '#FFFF00',
        borderWidth: 1,
        borderRadius: 10,
        paddingRight: 10,
        marginLeft: '20%'
    },
    cardItemTrue: {
        color: '#FFFFFF',
        paddingLeft: 10
    },
    cardItemFalse: {
        color: '#2F4F4F',
        paddingLeft: 10,
        textDecorationLine: 'line-through'
    },
    cardDoneImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardImage: {
        width: 30,
        height: 30
    }
});