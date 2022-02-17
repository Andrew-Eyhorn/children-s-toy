import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Match the Letter and Image!</Text>
      <StatusBar style="auto" />
      <Button
  title="A"
  color="#958890"
/>
<Button
  title="B"
  color="#958890"
/>
<Button
  title="C"
  color="#958890"
/>
<Button
  title="D"
  color="#958890"
/>
<Button
  title="E"
  color="#958890"
/>
<Button
  title="Apple"
  color="#958890"
/>
<Button
  title="Banana"
  color="#958890"
/>
<Button
  title="Crocodile"
  color="#958890"
/>
<Button
  title="Dolphin"
  color="#958890"
/>
<Button
  title="Egg"
  color="#958890"
/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: 'left',
    backgroundColor: '#fff',
    justifyContent: 'left',
    width:'10%',
    height:'50%',
  },
});
