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

//  const[keyItem, setKeyItem]=useState("")
//  const[valItem, setValueItem]=useState("")

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

    function Boton(){
      return(
        <View style = {styles.boton}>
          <Text style = {{color: "#fff", fontWeight: "bold", fontSize: 20}}>
            Sortear
          </Text>
        </View>
      )
    }

    return(
      <View style = {{alignItems: "center"}}>
        {keyOk || valOk ? (
          <>
          <View style = {styles.title}>
              <Text style = {{fontWeight: "bold"}}>Datos</Text>
          </View>
          <View style = {styles.dataConteiner}> 
              <View style = {styles.column}>
              {map(key,(item) => (
                <View style = {styles.dataItem}>
                  <Text style = {styles.dataText}>
                    {item}
                  </Text>
                </View>
              ))}
            </View>
            <View style = {styles.column}>
              {map(val,(item) => (
                <Text style = {styles.dataText}>
                  {item}
                </Text>
              ))}
            </View>
          </View>
          <Boton/>
          </>
        ):(
          <View style = {styles.warning}>
            <Text style = {styles.warningText}>Ingresa los datos</Text>
          </View>
        ) 
        }
      </View>
    )
  }

  function sortear(){

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
    height: 70,
    borderColor: 'gray',
    borderWidth: 2,
    marginTop:25,
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
    height: 70,
    width: "78%",
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
    backgroundColor: "#DCDCDC",
    width: "80%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flex: 1
  },
  dataItem:{
    paddingHorizontal: 20
  },
  dataText:{
    //fontWeight: "bold"
    fontSize: 16
  },
  column:{
    margin: 10,
    paddingHorizontal: 8,
    borderRadius: 10,
    backgroundColor: "#C0C0C0"
  },
  title:{
    alignItems: "center",
    backgroundColor: "#DCDCDC",
    marginTop: 20,width: "80%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20 
  },
  boton:{
    backgroundColor: "green",
    height: 50,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 20
  }
})  