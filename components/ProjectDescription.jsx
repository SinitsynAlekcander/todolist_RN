import React from "react";
import { StyleSheet, View, Text, Pressable } from 'react-native';

export default function ProjectDescription({navigation}) {
    return (
        <View style={styles.card}>
            <Pressable onPress={() => {
                navigation.goBack()
            }}><Text style={{color: 'white'}}>back</Text>
            </Pressable>
            <Text style={styles.cardText}>
                Hello
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        // color: 'white',
        backgroundColor: '#2F4F4F',
        flex: 1,
        alignItems: 'center',
        borderColor: '#FFFF00',
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
    },
    cardText: {
        lex: 1,
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
        // textAlign: 'center',
        // margin: 20,
        // alignItems: 'center',
    }
});