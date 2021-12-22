import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert } from 'react-native';

export default function App() {
  const customAlert = () => {
    Alert.alert("TouchableOpacity에도 onPress 속성이 있습니다")
  }
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.textContainer} onPress={customAlert}>
        <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.textContainer} onPress={customAlert}>
        <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.textContainer} onPress={customAlert}>
        <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.textContainer} onPress={customAlert}>
        <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.textContainer} onPress={customAlert}>
        <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.textContainer} onPress={customAlert}>
        <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.textContainer} onPress={customAlert}>
        <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textContainer: {
    height:100,
    borderColor:'#000',
    borderWidth:1,
    borderRadius:10,
    margin:10,
  },
  textStyle: {
    textAlign:"center"
  }
});