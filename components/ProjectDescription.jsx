import React from "react";
import { StyleSheet, View, Text, Pressable, Image } from 'react-native';

export default function ProjectDescription({ navigation }) {
    return (
        <View style={styles.card}>
            <Pressable onPress={() => {
                navigation.goBack()
            }}>
                <Text style={{ color: 'white' }}>
                    back
                </Text>
            </Pressable>
            <Image
                style={styles.cardImage}
                source={require('../assets/projectDescription.png')}
            />
            <Text style={styles.cardText}>
                Hello
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        textTransform: 'capitalize',
        textAlign: 'left',
    },
    cardImage: {
        width: 350,
        height: 350
    }
});