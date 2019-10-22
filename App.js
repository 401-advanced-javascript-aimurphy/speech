// import * as React from 'react';
import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
// Bring in the speech
import * as Speech from 'expo-speech';
import * as Permissions from 'expo-permissions';


export default function App () {

  const [permissions, setPermissions] = useState('');

const getPermissions = async()=>{
  const{status}=await Permissions.askAsync(Permissions.SPEECH);
  setPermissions(status)
};



  const speak=()=> {
    var thingToSay = 'hello';
    Speech.speak(thingToSay);
  };


    return (
      <View style={styles.container}>
        <Button title="Press to hear some words" onPress={this.speak} />
      </View>
    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
