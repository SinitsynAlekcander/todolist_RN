import { StyleSheet, View, Text, Pressable } from 'react-native';

export default function Footer({ navigation }) {
    return (
        <View style={styles.footer}>
            <Pressable onPress={() => navigation.navigate("ProjectDescription")}>
                <Text style={styles.footerNavigationText}>ProjectDescription</Text>
            </Pressable>
            <Text style={styles.footerText}> &copy; 2022</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#000000',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopColor: '#FFFF00',
        borderWidth: 1,
        paddingVertical: 20,
        paddingHorizontal: 20
    },
    footerNavigationText: {
        color: '#FFFF00',
        fontSize: 15,
        fontWeight: 'bold'
    },
    footerText: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: 'bold'
    },
});