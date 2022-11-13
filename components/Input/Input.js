import { StyleSheet, TextInput } from 'react-native';
import React from 'react';

const Input = ({...props}) => {
    return(
        <TextInput
            style={styles.userInput}
            blurOnSubmit
            autoCapitalization="none"
            autoCorrect={false}
            keyboardType='numeric'
            maxLength={2} 
            {...props}
        />
    )
}

const styles = StyleSheet.create({
    userInput: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        width: 50,
        fontSize: 30,
        justifyContent: 'center',
        marginBottom:10,
        textAlign: 'center'
    },
})

export default Input