import { StyleSheet, Text, View, Pressable, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react';
import Card from '../Card/Card';
import Input from '../Input/Input';
import colors from '../../constants/colors';


const StartGameScreen = () => {

    const [userNumber, setUserNumber] = useState("")
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState("")

    const handleUserInput = (text) => {
        setUserNumber(text.replace(/[^0-9]/g,""))
    }

    const handleClean = () => {
        setUserNumber("")
        setConfirmed(false)
    }

    const handleConfirm = () => {
        const chosenNumber = parseInt(userNumber)
        setConfirmed(true)
        setSelectedNumber(chosenNumber)
        setUserNumber('')
    }

    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <>
                <Card>
                    <View style={styles.container}>
                        <Text>Elige un número</Text>
                        <Input value={userNumber} onChangeText={handleUserInput} />
                        <View style={styles.buttonContainer}>
                            <Pressable style={styles.cleanButton} onPress={handleClean}>
                                <Text style={styles.buttonText}>BORRAR</Text>
                            </Pressable>
                            <Pressable style={styles.confirmButton} onPress={handleConfirm}>
                                <Text style={styles.buttonText}>CONFIRMAR</Text>
                            </Pressable>
                        </View>
                    </View>
                </Card>
                
                {confirmed && 
                    <Card>
                        <Text style={styles.selectedNumber}>Número elegido: {selectedNumber}</Text>
                        <Pressable>
                            <Text style={styles.startButton}>Empezar el juego</Text>
                        </Pressable>
                    </Card>}
            </>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonContainer:{
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-evenly"
    },

    cleanButton:{
        backgroundColor: colors.rojo,
        padding: 5,
        borderWidth: 1,
        borderRadius: 7,
        width: 90,
        alignItems: 'center'
    },

    confirmButton: {
        backgroundColor: colors.verde,
        padding: 5,
        borderWidth: 1,
        borderRadius: 7,
        width: 90,
        alignItems: 'center'
    },

    buttonText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 12
    },

    selectedNumber: {
        fontSize: 14,
        fontWeight: '600',
    },

    startButton: {
        fontSize: 25,
        fontWeight: '700',
        color: colors.azul
    }
})

export default StartGameScreen