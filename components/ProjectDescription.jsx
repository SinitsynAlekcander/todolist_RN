import { StyleSheet, View, Text, Pressable, Image } from 'react-native';

export default function ProjectDescription({ navigation }) {
    return (
        <View style={styles.card}>
            <Pressable onPress={() => navigation.goBack()}>
                <Text style={styles.cardBackText}>Back</Text>
            </Pressable>
            <Image
                style={styles.cardImage}
                source={require('../assets/projectDescription.png')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardBackText: {
        color: '#FFFF00',
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 20
    },
    cardImage: {
        width: 350,
        height: 350
    }
});