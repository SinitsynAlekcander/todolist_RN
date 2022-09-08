import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';

export default function ListItem({ item, deleteItem }) {
    return (
        <View style={styles.wrapp}>

            <View style={styles.changeImage}>
                <Image
                    style={styles.Image}
                    source={require('../assets/deleteImage.png')}
                />
            </View >

            <View style={styles.text}>
                <Text>
                    {item.text}
                </Text>
                <TouchableOpacity onPress={() => deleteItem(item.key)}>
                    <Image
                        style={styles.Image}
                        source={require('../assets/deleteImage.png')}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.doneImage}>
                <Image
                    style={styles.Image}
                    source={require('../assets/deleteImage.png')}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapp: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'red',
        // borderColor: '#FFFF00',
        // borderWidth: 1,
        // borderRadius: 10,
        // padding: 10, 
        marginTop: 10,
        // marginHorizontal: '20%'
    },
    changeImage: {
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'center'
    },
    text: {
        flex: 3,
        flexDirection: 'row',
        // color: 'white',
        paddingVertical: 5,
        width: 24,
        height: 24
    },
    doneImage: {
        flex: 1,
        backgroundColor: '#DCDCDC',
        alignItems: 'center'
    },
    Image: {
        width: 24,
        height: 24,
    },
});