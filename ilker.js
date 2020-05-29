import React from 'react';
import {Text, View} from 'react-native';

export default function Ilker(props) {
  console.log("ilker.js");
  return (
    <View>
      <Text>{props.name}</Text>
    </View>
  );
}

