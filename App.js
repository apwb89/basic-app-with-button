import React, { useState, useEffect } from 'react';
import { doc, setDoc, updateDoc, collection, getDocs, addDoc } from 'firebase/firestore';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  LogBox,
  Button,
  TextInput
} from 'react-native';
import TextInputField from 'react-native'



LogBox.ignoreLogs(['Setting a timer'])

import  db  from './firebase-config';

function App() {
  
  const [ test, setTest ] = useState('unpressed')

  const [ name, setName ] = useState('')

  
  // Read db
  
  const colRef = collection(db, 'users')
  
  const buttonPress = async () => {
    (test === 'unpressed') ? setTest('pressed') : setTest('unpressed')
  
   
    
    getDocs(colRef).then((snapshot) => {
      let users = []
      snapshot.docs.forEach((doc) => {
        users.push({ ...doc.data(), id: doc.id })
      })
      console.log(users)
    }).catch((err) => {
      console.log(err)
    })
    
  }
    



//add to db
const formInput = () => {

  
  addDoc(colRef, {
    name: name
  }).then(() => {
    setName('')
  })
  
}
   
  

  



  return (
    <View style={styles.setMargin}>
      <Button title="press here to console log users" style={styles.button} onPress={buttonPress}>Button</Button>
      
      <View style={styles.red} onPress={buttonPress}>
      </View>
      <Text style={styles.red}>{test}</Text>
      <TextInput placeholder="Enter your name here"
      value={name}
      onChangeText={text => setName(text)}/>
      <Button title="Submit" onPress={formInput} />
  
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
