import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [name, setName] = useState("Kofi");
  const clickhandler = () =>{
    setName('Asare');
  };
  const [people, setPeople] = useState([
    {name:'kwame', key:'1',},
    {name:'kwamd', key:'2',},
    {name:'kwamwf', key:'3',},
    {name:'kwaree', key:'4',},
    {name:'kwacme', key:'5',},
    {name:'kac', key:'6',},
  ]);
  return (
    <View style={styles.container}>
      <ScrollView>
      {people.map((names)=>{
        return (
          <View>
          <Text style={styles.item}>{names.name}</Text>
        </View>
        )
      })}
      </ScrollView>


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
    
  },
  item: {
    marginTop: '24',
    padding: '30',
    backgroundColor: 'pink',
    fontSize: '20'
  }
});

