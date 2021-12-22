import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
		//각 태그들에는 style이라는 속성을 갖습니다.
		//이 속성은 파일 최하단에 작성한 스타일 코드 객체의 키 값을 부여해
    // 엘리먼트들에 스타일을 줄 수 있습니다.
    //이는 JSX문법을 배우고 난 다음 더 자세히 다룹니다.
    <ScrollView style={styles.container}>
			{/* //보인 영역을 갖는 엘리먼트 7가 반복적으로 쓰였습니다. */}
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
      </View>
    </ScrollView>
  );
}

//텍스트가 영역을 갖고, 가운데 정렬도 하며, 테두리 스타일을 갖게 끔 하는 코드입니다.
//JSX를 마저 배우고 스타일에 대해 자세히 다루니
//걱정 안해도 좋습니다!
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