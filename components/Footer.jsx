import { StyleSheet, View, Text, Pressable } from 'react-native';

export default function Footer({ navigation }) {
    return (
        <View style={styles.footer}>
            <Pressable onPress={() => navigation.navigate("ProjectDescription")}>
                <Text style={styles.footerText}>111</Text>
            </Pressable>
            <Text style={styles.footerText}>222</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: 'tomato',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    footerText: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: 'bold',
    }
});