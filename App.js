import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Button, Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import { Image } from 'react-native';
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
  const restart = () => {
    setTimeout(() => {
      pairSelected("none")
      imageSelected("none")
      letterSelected("none")
    }, 100);
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
      <RestartButton reset = {restart}/>
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
//  const ImageButtons = (props) => { //Make imageButtons have images wow what a concept
//   return(
//   <View style={styles.imageButtons}>
// {imageButtonList.map((name, index) => 
//     <Button  key = {index}
//   title= {name}
//   color="#958890"
//   onPress={() => {
//     props.selector(name);
//     if(name.charAt(0) === props.letter) {
//       props.choosePair("Correct")
//     } else {
//       props.choosePair("Incorrect")
//     }
//   }}   
//   disabled={props.letter === "none" || props.image != "none" && props.image != name}/>
// )}
//    </View>
//   )
//  }
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
  },
  letterButtons: {
    width:'40%',
    height:'15%',
    display: 'flex',
    flexDirection: 'row',
  },
    imageButtons: {
      display: 'flex',
      flexDirection: 'column',
  },
  restartButton: {
    width:'20%',
    height:'50%',
  }
});
