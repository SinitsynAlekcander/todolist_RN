import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import Main from './components/Main';
import ProjectDescription from './components/ProjectDescription';
import Navigate from './navigation';

export default function App() {
  return (
    <Navigate />
    // <View style={styles.wrapper}>
    //   {/* <StatusBar barStyle='light-content' /> */}
    //   <MainStack />
    //   {/* <ProjectDescription /> */}
    // </View>
  );
}

// const styles = StyleSheet.create({
//   wrapper: {
//     backgroundColor: '#000000',
//     flex: 1,
//     // justifyContent: 'space-between'
//   }
// });