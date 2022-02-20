import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Button } from 'react-native';
const App = () => {
  const [selectedLetter, letterSelected] = useState("none"); //merge into one state object
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
  const reset = () => { //add function to restart whole game
    setTimeout(() => {
      pairSelected("none")
      imageSelected("none")
    }, 1000);
  }

  // const data = [    //make letterButtonList and imageButtonList into one array of objects. 
  //   {
  //     letter: 'A',
  //     image: 'Apple'
  //   },
  //   {
  //     letter: 'B',
  //     image: 'Bottle'
  //   }    
  // ];
  return (
    <View style={styles.container}>
      <Text>Match the Letter and Image!</Text>
      <StatusBar style="auto" />
      <LetterButtons letter = {selectedLetter} selector={selectLetter} />
      <ImageButtons image = {selectedImage} selector={selectImage} letter = {selectedLetter} choosePair = {selectPair}/>
      <ResultDisplay chosenPair = {selectedPair} reset = {reset}/>
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
    <Button  key = {index}
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
  disabled={props.letter === "none" || props.image != "none" && props.image != name}/>
)}
   </View>
  )
 }
 const ResultDisplay = (props) => {
  if (props.chosenPair === "none") {
    return(<View><Text></Text></View>)
} else if (props.chosenPair === "Correct"){
  return(<View><Text>{props.chosenPair}</Text></View>)
}else {
  props.reset()
  return(<View><Text>{props.chosenPair}</Text></View>)
}
}
// const GenerateResultDisplay = (props) => {
//   if (props.chosenPair === "none") {
//     return("")
// } else if (props.chosenPair === "correct"){
//   return(props.chosenPair)
// }else {
//   props.choosePair("none")
//   props.selector("none")
//   return(props.chosenPair)
// }}
// const ResultDisplay = (props) => {
//   return(<View><Text>{GenerateResultDisplay(props)}</Text></View>)
// }
export default App;
const styles = StyleSheet.create({
  container: {
    alignContent: 'left',
    backgroundColor: '#fff',
    justifyContent: 'left',
    display: 'flex',
  },
  letterButtons: {
    width:'20%',
    height:'50%',
    display: 'flex'
  },
    imageButtons: {
      width:'20%',
      height:'50%',
      display: 'flex',
  },
});
