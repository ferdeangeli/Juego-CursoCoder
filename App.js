import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header/Header';
import GameScreen from './components/Screens/GameScreen';
import StartGameScreen from './components/Screens/StartGameScreen';
import { useFonts } from 'expo-font';

export default function App() {

  const [loaded] = useFonts({
    TitanOne: require('./assets/fonts/TitanOne-Regular.ttf'),
    MarheyBold: require('./assets/fonts/Marhey-Bold.ttf')
  })


  if(!loaded){
    return null
  }

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
      <Header title="ADIVINA EL NUMERO" newStyles={{fontFamily: 'MarheyBold'}} />
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
