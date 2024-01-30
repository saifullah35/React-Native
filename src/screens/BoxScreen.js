import React from "react";
import { Text, View, Stylesheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.parentStyle}>
            <View style={styles.viewOneStyle}/>
            <View style={styles.viewTwoStyle}/>
            <View style={styles.viewThreeStyle}/>
        </View>
    )
}

const styles = StyleSheet.create({
    parentStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textOneStyle:{
        height: 50,
        width: 50,
        backgroundColor: 'red'
    },
    textTwoStyle:{
        height: 50,
        width: 50,
        backgroundColor: 'green',
        top: 50
    },
    textThreeStyle:{
        height: 50,
        width: 50,
        backgroundColor: 'blue'
    },
});
  
export default BoxScreen;