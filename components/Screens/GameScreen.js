import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import colors from '../../constants/colors'

const GameScreen = ({chosenNumber}) => {

    const randomNumber = parseInt(Math.random() * 99) 
    
    const [currentGuess, setCurrentGuess] = useState(randomNumber)

    const handleLowerButton = () => {
        if(chosenNumber < currentGuess){
            alert("GANASTE!!!")
        }else{
            alert("PERDISTE LOSER!!")
        }
    }

    const handleHigherButton = () => {
        if(chosenNumber > currentGuess){
            alert("GANASTE!!!")
        }else{
            alert("PERDISTE LOSER!!")
        }
    }

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.initialGuess}>Valor supuesto: {currentGuess}</Text>
            <Text style={styles.subtitle}>Y vos qué pensás????</Text>
            <View style={styles.buttonContainer}>
                <Pressable onPress={handleLowerButton}>
                    <Text style={styles.buttonLower}>MENOR</Text>
                </Pressable>
                <Pressable onPress={handleHigherButton}>
                    <Text style={styles.buttonHigher}>MAYOR</Text>
                </Pressable>
            </View>
            
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    
    initialGuess: {
        fontSize: 25,
        fontWeight: '700',
        marginBottom: 20
    },

    subtitle: {
        fontSize: 18,
        fontWeight: '400',
        marginBottom: 20
    },

    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly'

    },

    buttonHigher: {
        backgroundColor: colors.rojo,
        padding: 5,
        borderWidth: 1,
        borderRadius: 7,
        width: 90,
        alignItems: 'center',   
        textAlign: 'center',
        fontWeight: '700'
    },

    buttonLower: {
        backgroundColor: colors.azul,
        padding: 5,
        borderWidth: 1,
        borderRadius: 7,
        width: 90,
        alignItems: 'center',
        textAlign: 'center',
        fontWeight: '700'
    }
})