import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppPro from './AppPro';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Hello World Texts data</Text>
      <Text>Hello World Texts data</Text>
      <Text>Hello World Texts data</Text> */}
      <AppPro />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
// import React from 'react';

// import { View , Text, useColorScheme} from 'react-native';

//  function App(): JSX.Element {
//     const isDarkMode = useColorScheme() === 'dark'
//     return(
//      <View style={styles.container}>

//      </View>
//     )
//  }
//  const styles = StyleSheet.create({
//     container: {
//         flex : 1,
//         alignItems:'center'
//     }
//  })
//  export default App;