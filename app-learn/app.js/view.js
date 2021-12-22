import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.subContainerOne}></View>
      <View style={styles.subContainerTwo}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  subContainerOne: {
    flex:1,
    backgroundColor:"yellow"
  },
  subContainerTwo: {
    flex:1,
    backgroundColor:"green"
  }
});