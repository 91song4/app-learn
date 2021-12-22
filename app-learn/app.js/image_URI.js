import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
//이렇게 상단에 가져와 사용할 이미지를 불러옵니다
import favicon from "./assets/favicon.png"

export default function App() {
  return (
    <View style={styles.container}>
			{/*이미지 태그 soruce 부분에 가져온 미지 이름을 넣습니다 */}
      <Image 
        source={{uri:'https://images.unsplash.com/photo-1424819827928-55f0c8497861?fit=crop&w=600&h=600%27'}}
				// 사용설명서에 나와 있는 resizeMode 속성 값을 그대로 넣어 적용합니다
        resizeMode={"cover"}
        style={styles.imageStyle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //혹시 미리 궁금하신 분들을 위해 언급하자면,
    //justifyContent와 alignContent는 영역 안에 있는 콘텐츠들을 정렬합니다
    justifyContent:"center",
    alignContent:"center"
  },
  imageStyle: {
    width:"100%",
    height:"100%",
    alignItems:"center",
    justifyContent:"center"
  }
});