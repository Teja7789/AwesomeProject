import React, { JSXElementConstructor } from "react";
import {View , Text , StyleSheet,
useColorScheme}  from 'react-native';

export default function AppPro(): JSX.Element{
    const isDarkMode = useColorScheme() === 'dark'

return (
<View style={styles.container}>
    <Text style={isDarkMode ?  styles.darkText : styles.whiteText}>Hello World  </Text>
</View>
)
}
const styles = StyleSheet.create({
    container : {
        flex :1,
        alignItems : 'flex-end' ,//styles moves left to  right
        justifyContent: 'center' // styles up to down
    },
    whiteText: {
        color: '#FFFFFFF',
    },
    darkText:{
        color:'#000000',
    }
})