import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header/Header';
import StartGameScreen from './components/Screens/StartGameScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header style={styles.header} title="ADIVINA EL NUMERO" />
      <StartGameScreen />
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
