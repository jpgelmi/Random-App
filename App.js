import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput
} from 'react-native';

import {map} from "lodash"

export default function App(){
  const[key, setKey]=useState([])
  const[val, setValue]=useState([])

  return(
    <SafeAreaView>
      <ScrollView>
        <View>
          <TextInput
            placeholder= {"Ingrese valor 1"}
            style = {styles.input}
            autoCapitalize = {true}
            onSubmitEditing = {e => setKey([...key, e.nativeEvent.text])}
          />
          <TextInput
            placeholder= {"Ingrese valor 2"}
            style = {styles.input}
            autoCapitalize = {true}
            onSubmitEditing = {e => setValue([...val, e.nativeEvent.text])}
          />
          <View style = {styles.outKey}>
            {map(key,(item) => (
              <Text>{item}</Text>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 80,
    borderColor: 'gray',
    borderWidth: 2,
    marginTop:30,
    marginHorizontal:20,
    borderRadius:20,
    paddingHorizontal: 10,
    //color:"red"
    fontSize:22,
    fontWeight:"bold"
  },
  outKey:{
    backgroundColor: "red"
  }
})