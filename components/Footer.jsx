import { StyleSheet, View, Text } from 'react-native';

export default function Footer() {
    return (
        <View style={styles.footer}>
            <Text style={styles.text}>Information</Text>
            <Text style={styles.text}>Information</Text>
            <Text style={styles.text}>Information</Text>
            <Text style={styles.text}>Information</Text>
            <Text style={styles.text}>Information</Text>
            <Text style={styles.text}>Information</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        justifyContent: 'space-evenly',
        backgroundColor: '#2F4F4F',
        height: 100,
        paddingLeft: '00%',
        // justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        color: '#FFFFFF',
        fontSize: 15
    }
});
