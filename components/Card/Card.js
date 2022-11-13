import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const Card = ({children}) => {
    return(
        <View style={styles.inputContainer}>{children}</View>
    )
}

const styles = StyleSheet.create({
    inputContainer:{
        marginTop:20,
        width: 300,
        borderWidth:1,
        padding:10,
        shadowColor: "black",
        shadowOffset: {width:0, height:2},
        shadowRadius:6,
        shadowOpacity: 0.7,
        elevation:5,
        borderRadius:10,
        backgroundColor: "white",
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default Card