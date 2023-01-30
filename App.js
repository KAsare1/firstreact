import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [name, setName] = useState("Kofi");
  const clickhandler = () =>{
    setName('Asare');
  };
  return (
    <View style={styles.container}>
      <Text>Hello, I'm </Text>
      <TextInput onChangeText={(val)=>setName(val)}/>
      <Text>This Is My First React Native App</Text>
      <Text> Kwame </Text>
      <Button title='woww' onPress= {clickhandler}/>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex:1,
    alignItems: 'center',
    justifyContent:'center'
    
  }
});

