import Main from './components/Main';
import ProjectDescription from "./components/ProjectDescription";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function Navigate() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen
                    name='Main'
                    component={Main}
                />
                <Stack.Screen
                    name='ProjectDescription'
                    component={ProjectDescription}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

