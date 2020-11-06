import React, {useState,useEffect} from 'react';
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

  const[keyOk, setKeyOk] =useState(false)
  const[valOk, setValOk] =useState(false)

  useEffect(() => {
    if( key.length !== 0){
      setKeyOk(true)
      console.log("setKeyOk(true)")
    }
    if( val.length !== 0){
      setValOk(true)
      console.log("setValOk(true)")
    }

  }, [key, val])


  function DataView(){
    return(
      <View style = {{alignItems: "center"}}>
        {keyOk || valOk ? (
          <View style = {styles.dataConteiner}> 
            
          </View>
        ):(
          <View style = {styles.warning}>
            <Text style = {styles.warningText}>Ingresa los datos</Text>
          </View>
        )
          
        }
      </View>
    )
  }

  return(
    <SafeAreaView>
      <ScrollView>
        <View>
          <TextInput
            placeholder= {"Ingrese valor 1"}
            style = {styles.input}
            autoCapitalize = {"none"}
            onSubmitEditing = {e => setKey([...key, e.nativeEvent.text])}
          />
          <TextInput
            placeholder= {"Ingrese valor 2"}
            style = {styles.input}
            autoCapitalize = {"none"}
            onSubmitEditing = {e => setValue([...val, e.nativeEvent.text])}
          />
          <DataView/>
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
  },
  warning:{
    height: 90,
    width: "80%",
    backgroundColor: "#FADA5E",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 20
  },
  warningText:{
    fontSize: 25,
    fontWeight:"bold"
  },
  dataConteiner:{

  }
})  