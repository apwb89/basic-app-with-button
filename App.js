import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Alert,
} from 'react-native';


import db from './firebase-config';

function App() {
  const [ test, setTest ] = useState('unpressed')

  const buttonPress = () => {
    setTest('pressed')
  }

  useEffect(() => {

  }, [test])

  return (
    <View style={styles.setMargin}>
      <Button title="top-of-app" style={styles.button} onPress={buttonPress}>Button</Button>
      
      <View style={styles.red} onPress={buttonPress}>
      </View>
      <Text style={styles.red}>{test}</Text>
  
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  setMargin: {
    marginTop: 50,
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
  },

red: {
  backgroundColor: "red",
  height: 100,
}
});

export default App;
