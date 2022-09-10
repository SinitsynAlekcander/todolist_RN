import { StyleSheet, View, Text } from 'react-native';

export default function Footer() {
    return (
        <View style={styles.footer}>
            <Text style={styles.text}>'&copy'</Text>
            <Text style={styles.text}>Information</Text>
            <Text style={styles.text}>Information</Text>
            <Text style={styles.text}>Information</Text>
            <Text style={styles.text}>Синицын Александр</Text>
            <Text style={styles.text}>Итоговое задание на стажировку LAD</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        justifyContent: 'space-evenly',
        backgroundColor: '#2F4F4F',
        height: 100,
        paddingLeft: '00%',
        alignItems: 'stretch'
        // justifyContent: 'space-between',
    },
    text: {
        color: '#FFFFFF',
        fontSize: 15
    }
});
