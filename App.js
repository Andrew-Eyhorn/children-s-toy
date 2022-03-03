import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Button, Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import { Image } from 'react-native';
const App = () => {
  const [selectedLetter, letterSelected] = useState("none"); 
  const selectLetter = (letter) => {
    letterSelected(letter)
  }
  const [selectedImage, imageSelected] = useState("none");
  const selectImage = (image) => {
    imageSelected(image)
  }
  const [selectedPair, pairSelected] = useState("none")
  const selectPair = (type) => {
    pairSelected(type)
  }
  const reset = () => { 
    setTimeout(() => {
      pairSelected("none")
      imageSelected("none")
    }, 1000);
  }
  const restart = () => {
    setTimeout(() => {
      pairSelected("none")
      imageSelected("none")
      letterSelected("none")
    }, 100);
  }
  return (
    <View style = {styles.container}>
      <View style={styles.subContainer}>
      <Text>Match the Letter and Image!</Text>
      <RestartButton reset = {restart}/>
      <StatusBar style="auto" />
      <LetterButtons letter = {selectedLetter} selector={selectLetter} />
      </View>
      <View style = {styles.subContainer}>
      <ImageButtons image = {selectedImage} selector={selectImage} letter = {selectedLetter} choosePair = {selectPair}/>
      <ResultDisplay chosenPair = {selectedPair} reset = {reset}/>
      </View>
    </View>
  );
}
const letterButtonList = ["A", "B", "C", "D", "E"]
const LetterButtons = (props) => {
 return(
 <View style={styles.letterButtons}>
   {letterButtonList.map((name, index) => 
    <Button  key = {index}
  title= {name}
  color="#958890"
  onPress={() => {
    props.selector(name);
  }}   
  disabled={props.letter != "none" && props.letter != name}/>
)}
  </View>
 )
}
const imageButtonList = ["Apple", "Banana", "Crocodile", "Dragon", "Egg"] 
const ImageButtons = (props) => { //Make imageButtons have images wow what a concept
  return(
  <View style={styles.imageButtons}>
{imageButtonList.map((name, index) => 
    <TouchableOpacity style={styles.imageButtons}
    key = {index}
  title= {name}
  color="#958890"
  onPress={() => {
    props.selector(name);
    if(name.charAt(0) === props.letter) {
      props.choosePair("Correct")
    } else {
      props.choosePair("Incorrect")
    }
  }}   
  disabled={props.letter === "none" || props.image != "none" && props.image != name}>
<Image source={require('./Assets/'+name+'.png')} style={{ width: 40, height: 40 }}/>
    </TouchableOpacity>
)}
   </View>
  )
 }
 const ResultDisplay = (props) => {
  if (props.chosenPair === "none") {
    return(<View><Text></Text></View>)
} else if (props.chosenPair === "Correct"){
  return(<View><Text  style = {styles.correct}>{props.chosenPair}</Text></View>)
}else {
  props.reset()
  return(<View><Text  style = {styles.incorrect}>{props.chosenPair}</Text></View>)
}
}
const RestartButton = (props) => {
return(<View style={styles.restartButton}>
<Button 
title = "Restart"
color="#958890"
onPress={() => {
  props.reset()
}}
/>
</View>)
}
export default App;
const styles = StyleSheet.create({
  container: {
    alignContent: 'left',
    backgroundColor: '#fff',
    justifyContent: 'left',
    display: 'flex',
    flexDirection: 'row',
  },
  subContainer: {
    alignContent: 'left',
    backgroundColor: '#fff',
    justifyContent: 'left',
    display: 'flex',
    paddingLeft: '25px',
  },
  letterButtons: {
    width:'250px',
    height:'10px',
    paddingTop: '10px',
  },
    imageButtons: {
      paddingTop: '10px',
  },
  restartButton: {
    width:'100px',
    height:'50',
  },
  correct: {
    color: '#32CD32',
    fontSize: '35px'
  },
  incorrect: {
    color: '#FF0000',
    fontSize: '25px'
  },
});
