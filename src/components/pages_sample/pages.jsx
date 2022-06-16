import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styled from 'styled-components/native'



const BasicText = styled.Text`
    
`

const BasicView = styled.View`

`




export function TestStart({ navigation }) {

   

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
        <TitleText>여행자 유형</TitleText>
        <TitleText>테스트</TitleText>

        <MediumText> 내 취향을 알면 여행이 쉽다</MediumText>
        
        <Button
            title="테스트 시작하기"
            onPress={() => navigation.navigate('Page1')}
        >
            <MediumText>테스트 시작하기</MediumText>
            <SmallText>지금까지 000,000명이 참여!</SmallText>

        </Button>





        <MediumText>Yeowoon</MediumText>
        </View>
    );
    }
    

const TitleText = styled(BasicText)`
    font-size: 50px;
`


const MediumLargeText = styled(BasicText)`
    font-size: 30px;
`

const MediumText = styled(BasicText)`
    font-size: 20px;
`

const SmallText = styled(BasicText)`
font-size: 10px;
`




export function Page1({ navigation }) {
return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>


    <MediumText> 어느새 다가온 휴가시즌... </MediumText>
    <MediumText> 여행을 어떻게 준비할까? </MediumText>


    <Button
        title="떠날 나라와 지역이면 충분하지"
        onPress={() => {
           
            navigation.navigate('Page2', {
                points: 1,
            })
        }}
    />
    <Button
        title="저렴한 항공부터 인기장소까지! 꼼꼼한 준비가 후회가 없는 법!"
        onPress={() => {
         
            navigation.navigate('Page2', {
                points: -1,
            })}
        }
    />
    </View>
);
}



export function Page2({ navigation, route }) {

    const {points} = route.params

    const pointsNow =  parseInt(JSON.stringify(points))

    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <MediumText> 어느새 다가온 휴가시즌... </MediumText>
        <MediumText> 여행을 어떻게 준비할까? </MediumText>



    <Button
        title="이번만 여행인가? 현생 살아야지..."
      onPress={() => 
        
        
        navigation.navigate('Page3', {
           points:  pointsNow + 1
        })
    
    
    
    }
    />
    <Button
        title="오늘을 위해서 열심히 일했지. 여행에서만큼은 아끼지 않는다!"
      onPress={() => 
        
        navigation.navigate('Page3', {
            points:  pointsNow - 1
         })}
    />
    </View>
);
}


export function Page3({ navigation, route  }) {

    const {points} = route.params

    const pointsNow =  parseInt(JSON.stringify(points))
    console.log(pointsNow)
    console.log((parseInt(pointsNow) + 1))

return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    
    <MediumText> 이번 휴가에 여행을 떠난다면, </MediumText>
        <MediumText> 어떤 컨셉으로 즐겨볼까?</MediumText>
    
    
    <Button
        title="여유로운 호캉스의 휴양지는 사랑."
        onPress={() => console.log(`finished! your point is ${(parseInt(pointsNow) + 1)}`)}
    />
    <Button
        title="아무래도 꺠끗하고 치안이 좋은 곳, 그리고 유명한 곳이 좋지 않나?"
        onPress={() => console.log(`finished! your point is ${parseInt(pointsNow) + 0}`)}
    />
    <Button
        title="엑티비티와 색다른 경험을 찾아!"
        onPress={() => console.log(`finished! your point is ${parseInt(pointsNow) + -1}`)}
    />
    </View>
);
}




