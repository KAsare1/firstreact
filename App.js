import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [name, setName] = useState("Kwame");
  return (
    <View style={styles.container}>
      <Text>Hello, I'm Asare</Text>
      <Text>This Is My First React Native App</Text>
      <Text> Kwame </Text>

      <StatusBar style="auto" />
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

