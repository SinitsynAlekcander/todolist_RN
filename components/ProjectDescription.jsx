import React from "react";
import { StyleSheet, View, Text } from 'react-native';

export default function ProjectDescription() {
    return (
        <View style={styles.card}>
            <Text>
                Hello
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#000000',
        flex: 1,
    }
});