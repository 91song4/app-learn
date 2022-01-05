import React from 'react'
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native'
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'
export default function AboutPage(){
    return(
        <View style={styles.container}>
            <Text style={styles.textTitle}>HI! 스파르타코딩 앱개발반에 오신것을 환영합니다</Text>
            <View style={styles.inerContainer}>
                <Image style={styles.imageStyle} source={{uri:'https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2FaboutImage.png?alt=media&token=13e1c4f6-b802-4975-9773-e305fc7475c4'}}/>
                <Text style={styles.textMiddle}>많은 내용을 간결하게 담아내려 노력했습니다!</Text>
                <Text style={styles.textDesc}>꼭 완주 하셔서 꼭 여러분것으로 만들어가시길 바랍니다</Text>
                <TouchableOpacity style={styles.touchableBox}>
                    <Text style={styles.textTouchable}>여러분의 인스타계정</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'blue'
    },
    textTitle:{
        color:'white',
        fontSize:40,
        alignSelf: 'center',
        marginTop:100,
        width: 350,
        fontWeight: '800'
    },
    inerContainer:{
        backgroundColor:'white',
        borderRadius:30,
        alignSelf:'center',
        width: 350,
        height: 500,
        marginTop: 100
    },
    imageStyle:{
        width: 150,
        height: 150,
        borderRadius:30,
        alignSelf:'center',
        marginTop:70
    },
    textMiddle:{
        textAlign:'center',
        fontSize:30,
        padding:20,
        fontWeight: 'bold'
    },
    textDesc:{
        fontSize:20,
        fontWeight: '600',
        textAlign:'center',
        paddingLeft: 20,
        paddingRight: 20,
    },
    touchableBox:{
        backgroundColor:'orange',
        alignSelf:'center',
        justifyContent:'center',
        width:150,
        height:50,
        marginTop:20,
        borderRadius:15,
    },
    textTouchable:{
        textAlign:'center',
        color:'white',
        fontSize:15,
        fontWeight: 'bold',
    }
})