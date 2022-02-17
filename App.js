import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Button } from 'react-native';
const LetterButtons = () => {
  const [selectedLetter, letterSelected] = useState("none");
 return(
 <View style={styles.letterButtons}>
  <Button  
  title="A"
  color="#958890"
  onPress={() => {
    letterSelected("A");
  }}   
  disabled={selectedLetter != "none" && selectedLetter != "A"}
/>
<Button
  title="B"
  color="#958890"
  onPress={() => {
    letterSelected("B");
  }}   
  disabled={selectedLetter != "none" && selectedLetter != "B"}
/>
<Button
  title="C"
  color="#958890"
  onPress={() => {
    letterSelected("C");
  }}
  disabled={selectedLetter != "none" && selectedLetter != "C"}   
/>
<Button
  title="D"
  color="#958890"
  onPress={() => {
    letterSelected("D");
  }}
  disabled={selectedLetter != "none" && selectedLetter != "D"}   
/>
<Button
  title="E"
  color="#958890"
  onPress={() => {
    letterSelected("E");
  }}
  disabled={selectedLetter != "none" && selectedLetter != "E"}   
/>
  </View>
 )
}
const ImageButtons = () => {
  const [selectedImage, imageSelected] = useState("none");
  return(
  <View style={styles.imageButtons}>
 <Button
   title="Apple"
   color="#958890"
   onPress={() => {
    imageSelected("A");
  }}   
  disabled={selectedImage != "none" && selectedImage != "A"}
 />
 <Button
   title="Banana"
   color="#958890"
   onPress={() => {
    imageSelected("B");
  }}   
  disabled={selectedImage != "none" && selectedImage != "B"}
 />
 <Button
   title="Crocodile"
   color="#958890"
   onPress={() => {
    imageSelected("C");
  }}   
  disabled={selectedImage != "none" && selectedImage != "C"}
 />
 <Button
   title="Dolphin"
   color="#958890"
   onPress={() => {
    imageSelected("D");
  }}   
  disabled={selectedImage != "none" && selectedImage != "D"}
 />
 <Button
   title="Egg"
   color="#958890"
   onPress={() => {
    imageSelected("E");
  }}   
  disabled={selectedImage != "none" && selectedImage != "E"}
 />
   </View>
  )
 }
 const App = () => {
  return (
    <View style={styles.container}>
      <Text>Match the Letter and Image!</Text>
      <StatusBar style="auto" />
      <LetterButtons />
      <ImageButtons />
    </View>
  );
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
    width:'10%',
    height:'50%',
    display: 'flex'
  },
    imageButtons: {
      width:'10%',
      height:'50%',
      display: 'flex',
  },
});
