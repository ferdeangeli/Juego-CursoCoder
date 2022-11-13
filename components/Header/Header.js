import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = ({title}) => {
    return(
        <View style={styles.header}>
            <Text style={styles.headerText}>{title}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    header:{
        paddingTop: 30,
        paddingBottom: 10,
        alignItems: "center",
        backgroundColor: 'purple',
        width: '100%'
    },

    headerText:{
        color: "white",
        fontSize: 16,
        fontWeight:'700',
    }
})

export default Header