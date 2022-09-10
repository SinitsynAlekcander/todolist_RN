import React from "react";
// import App from "./App";
import Main from './components/Main';
import { createStackNavigator } from "react-navigation-stack";
import { NavigationContainer } from "@react-navigation/native";


const Stack = createStackNavigator();


export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
            name='Main'
            component={Main}
            options={{title: 'Главная'}}
            />

        </Stack.Navigator>
    </NavigationContainer>
}

// const styles = StyleSheet.create({
//     card: {
//         backgroundColor: '#000000',
//         flex: 1,
//     }
// });