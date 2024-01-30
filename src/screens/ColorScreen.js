import React, { useState } from "react";
import { View, StyleSheet, Button, FlatList} from 'react-native';

const ColorScreen = () => {
    const [ colors, setColors ] = useState([]);

    return (
        <View>
            <Button 
                title= "Add a color" 
                onPress= {() => 
                    setColors([...colors, randomeRgb])
                }
            />
            <View style={{ height: 100, width: 100, backgroundColor: randomeRgb }} />
            <FlatList 
                keyEctractor={(item) => item}
                data= {colors} //array of data that we want to turn into a list
                renderitem= {({ item }) => {
                    return (
                        <View style={{ height: 100, width: 100, backgroundColor: item }} />
                    ); //function that that's going to be called with every element inside the array
                }}  
            />
        </View>
    );
};

const randomeRgb = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    return `rgb(${red}, ${green}, ${blue})`;
}

const styles = StyleSheet.create({});

export default ColorScreen;