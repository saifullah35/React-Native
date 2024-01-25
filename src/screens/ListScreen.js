import React from "react";
import { View, Text, StyleSheet, FlatList} from 'react-native';

    const ListScreen = () => {
        const friends = [
            {name: 'Friend #1'},
            {name: 'Friend #2'},
            {name: 'Friend #3'},
            {name: 'Friend #4'},
            {name: 'Friend #5'},
            {name: 'Friend #6'},
            {name: 'Friend #7'},
            {name: 'Friend #8'},
            {name: 'Friend #9'},
        ];

        return (
        <FlatList 
            horizontal   //Tells list to scroll horizontally
            showsHorizontalScrollIndicator={false} //keeps that scrollbar from appearing
            keyExtractor={friend => friend.name}  //Specifies how to extraxt the key for each item
            data={friends}   //Array of friends passed as the data source for the list
            renderItem={({item}) => { //Function that takes an object with the 'item' prop and returns the JSX to render for each item
                return <Text style={styles.textStyle}>{item.name}</Text>;
            }}
            />
        );
    };

    const styles = StyleSheet.create({
        textStyle:{
            marginVertical: 50
        }
});

export default ListScreen;


