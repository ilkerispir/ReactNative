import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity } from 'react-native';
import Ilker from './ilker';

export default function App() {
  const [people, setPeople] = useState([
    {name: 'deneme', key: '1'},
    {name: 'deneme', key: '2'},
    {name: 'deneme', key: '3'},
    {name: 'deneme', key: '4'},
    {name: 'deneme', key: '5'},
  ])
  console.log(people);

  return (
    <View style={styles.container}>
      <FlatList 
          numColumns={2}
          keyExtractor={(item) => item.key}
          data={people}
          renderItem={({item}) => (
          <TouchableOpacity onPress={() => {setPeople(prevPeople => {
            return prevPeople.filter(person => person.key != item.key);  
          })}}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
          )}
          />
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
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200
  },
  item: {
    padding: 50,
    backgroundColor: 'red',
    color: 'white',
    margin: 5
  }
});
