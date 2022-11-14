import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header/Header';
import GameScreen from './components/Screens/GameScreen';
import StartGameScreen from './components/Screens/StartGameScreen';

export default function App() {

  const [userNumber, setUserNumber] = useState('')

  const handleStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber)
  }

  let content = <StartGameScreen onStartGame={handleStartGame} />

  const handleRestart = () => {
    setUserNumber('')
    content = <StartGameScreen onStartGame={handleStartGame} />
  }

  if(userNumber){
    content = <GameScreen chosenNumber={userNumber} onRestart={handleRestart}/>
  }



  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header style={styles.header} title="ADIVINA EL NUMERO" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center' ,
    justifyContent: 'flex-start',
  },
});
