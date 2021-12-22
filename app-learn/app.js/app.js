//우리가 리액트, 리액트 네이티브, 엑스포 라이브러리에서 꺼내 사용할 기능들을
//이렇게 앞으로도 상단에 선언한다음 가져다 사용합니다.
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//App.js는 결국 App 함수를 내보내기 하고 있는 자바스크립트 파일입니다.
//이 함수는 무언가?를 반환하고 있는데 결국 화면을 반환하고 있습니다.
export default function App() {
	//화면을 반환합니다.
	//HTML 태그 같이 생긴 이 문법은 JSX라 불리우며 실제 화면을 그리는 문법입니다,
	//이번 강의에서 자세히 다룹니다
	console.disableYellowBox = true;
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

// styles 변수 이름 답게 화면을 그려주는, 
//더 자세히는 JSX문법을 꾸며주는 내용을 담고 있습니다.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});