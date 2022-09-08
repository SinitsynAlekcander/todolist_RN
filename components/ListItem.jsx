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
                <View style={styles.qwerty1}>
                    <Text>
                        {item.text}
                    </Text>
                </View>
                <View style={styles.qwerty1}>
                    <TouchableOpacity onPress={() => deleteItem(item.key)}>
                        <Image
                            style={styles.Image}
                            source={require('../assets/deleteImage.png')}
                        />
                    </TouchableOpacity>
                </View>
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
        height: 70,
        // marginHorizontal: '20%'
    },
    changeImage: {
        flex: 1,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // color: 'white',
        //paddingVertical: 5,
    },
    doneImage: {
        flex: 1,
        backgroundColor: '#DCDCDC',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Image: {
        // flex: 1,
        width: 24,
        height: 24,
    },
    1: {

    }
});