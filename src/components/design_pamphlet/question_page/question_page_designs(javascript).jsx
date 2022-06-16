import * as React from 'react';
import { StyleSheet} from 'react-native';
import styled from 'styled-components/native'
import { TouchableOpacity,ScrollView } from 'react-native';
import { ImageImg, StatusBarView } from '../common_components/common_components.style';
import * as S from './question_page_components/static_components/static_components'
import { ChoiceText, PageIndicator, QuestionText } from './question_page_components/static_components/static_components.style';
import { personalityPointsFromStart } from './personality_points';



const styles = StyleSheet.create({
    touchableOpacity:{
        borderColor: `#8A7DCA`,
        borderWidth: 2,
        paddingTop: 10, 
        paddingBottom: 10,
        paddingLeft:14, 
        paddingRight:14, 
        marginBottom: 30
    }
})


// 즉흥적 : improvisive
// 탐험적 : exploring
// 계획적 : onPlanning
// 효율적 : efficient
// 열정적 : passionate
// 플렉스 : flexing
// 여유로운 : relaxing
// 안정적 : safetyConcerning






export function No1({ navigation }) {

    const no1TestStart = {...personalityPointsFromStart}

    const selectOne = () => {

        no1TestStart[`improvisive`] = no1TestStart[`improvisive`] + 1;
        no1TestStart[`exploring`] = no1TestStart[`exploring`] + 1;
        
    }

    const selectTwo = () => {

        no1TestStart[`onPlanning`] = no1TestStart[`onPlanning`] + 1;
        no1TestStart[`efficient`] = no1TestStart[`efficient`] + 1;
        
    }


    return (

        <S.FirstView>
            <StatusBarView></StatusBarView>
            <PageIndicator></PageIndicator>
            <S.ImageView>
                <ImageImg source={require(`../../../../public/img/survay/question_page/1.png`)}/>
            </S.ImageView>

            <S.QuestionView>
                <QuestionText>어느새 다가온 휴가 시즌... {"\n"}여행을 어떻게 준비할까?</QuestionText>
            </S.QuestionView>

            <TouchableOpacity style={styles.touchableOpacity} onPress={() => {
                selectOne()
                navigation.navigate('QuestionNo2', {
                    no1TestResult : no1TestStart
            })
        }
            }>
                <S.ChoiceView >
                    <ChoiceText>떠날 나라와 지역이면 충분하지!</ChoiceText>
                </S.ChoiceView>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touchableOpacity} onPress={() => {
                selectTwo()
                navigation.navigate('QuestionNo2', {
                    no1TestResult : no1TestStart
                }
                )}}>

                <S.ChoiceView >
                    <ChoiceText>저렴한 항공부터 인기 장소까지!{"\n"}꼼꼼한 준비가 후회가 없는 법!</ChoiceText>
                </S.ChoiceView>
            </TouchableOpacity>
           

        </S.FirstView>
    



    );
}




export function No2({ navigation, route }) {

  
    const QuestionTextNo2 = styled(QuestionText)`
        font-size: 24px;
    `

    const ImageViewNo2 = styled(S.ImageView)`
    `





    const {no1TestResult} = route.params
    const no2TestStart = {...no1TestResult}


    console.log(no2TestStart)

    const selectOne = () => {


        no2TestStart[`onPlanning`] = no2TestStart[`onPlanning`] + 1;
        no2TestStart[`efficient`] = no2TestStart[`efficient`] + 1;
        
    }

    const selectTwo = () => {

        no2TestStart[`passionate`] +=  1;
        no2TestStart[`flexing`] +=  1;
        
    }



    return (


        <S.FirstView>
            <StatusBarView></StatusBarView>
            <PageIndicator></PageIndicator>
            <ImageViewNo2>
                <ImageImg source={require(`../../../../public/img/survay/question_page/2.png`)}/>
            </ImageViewNo2>

            <S.QuestionView>
                <QuestionTextNo2>원래 예산은 200만인 상황, {"\n"}하고 싶은 걸 하면 예산 초과라면?</QuestionTextNo2>
            </S.QuestionView>


            <TouchableOpacity style={styles.touchableOpacity} onPress={() => {
                selectOne()
                navigation.navigate('QuestionNo3', {
                    no2TestResult : no2TestStart
            })
        }
            }>

            <S.ChoiceView>
                <ChoiceText>이번만 여행인가? 현생 살아야지!</ChoiceText>
            </S.ChoiceView>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touchableOpacity} onPress={() => {
                selectTwo()
                navigation.navigate('QuestionNo3', {
                    no2TestResult : no2TestStart
            })
        }
            }>

            <S.ChoiceView>
                <ChoiceText>오늘을 위해서 열심히 일했지.{"\n"}여행에서만큼은 아끼지 않는다!</ChoiceText>
            </S.ChoiceView>
            </TouchableOpacity>


        </S.FirstView>
      



    );
}






export function No3({ navigation, route }) {

    const {no2TestResult} = route.params
    const no3TestStart = {...no2TestResult}
    
    console.log(no3TestStart)
    
    const selectOne = () => {


        no3TestStart[`relaxing`] +=  1;
        no3TestStart[`flexing`] +=  1;
        
    }

    const selectTwo = () => {

        no3TestStart[`safetyConcerning`] +=  2;
        
    }
    
    const selectThree = () => {

        no3TestStart[`passionate`] +=  1;
        no3TestStart[`exploring`] +=  1;
        
    }
    
    
    
    
    
    return (


        <S.FirstView>
            <StatusBarView></StatusBarView>
            <PageIndicator></PageIndicator>
            <S.ImageView>
                <ImageImg source={require(`../../../../public/img/survay/question_page/3.png`)}/>
            </S.ImageView>

            <S.QuestionView>
                <QuestionText>이번 휴가에 여행을 떠난다면, {"\n"}어떤 컨셉으로 즐겨볼까?</QuestionText>
            </S.QuestionView>

            <TouchableOpacity style={styles.touchableOpacity} onPress={() => {
                selectOne()
                navigation.navigate('QuestionNo4', {
                    no3TestResult : no3TestStart
            })
        }
            }>
                <S.ChoiceView >
                    <ChoiceText>여유로운 호캉스와 휴양지는 사랑.</ChoiceText>
                </S.ChoiceView>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touchableOpacity} onPress={() => {
                selectTwo()
                navigation.navigate('QuestionNo4', {
                    no3TestResult : no3TestStart
            })
        }
            }>

                <S.ChoiceView >
                    <ChoiceText>아무래도 깨끗하고 치안이 좋은 곳,{"\n"}그리고 유명한 곳이 좋지 않나?</ChoiceText>
                </S.ChoiceView>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touchableOpacity} onPress={() => {
                selectThree()
                navigation.navigate('QuestionNo4', {
                    no3TestResult : no3TestStart
            })
        }
            }>

                <S.ChoiceView >
                    <ChoiceText>액티비티와 색다른 경험을 찾아!</ChoiceText>
                </S.ChoiceView>
            </TouchableOpacity>
           

        </S.FirstView>
    


    );
}




export function No4({ navigation, route }) {

    const {no3TestResult} = route.params
    const no4TestStart = {...no3TestResult}
    
    console.log(no4TestStart)


    const selectOne = () => {


        no4TestStart[`safetyConcerning`] +=  1;
        no4TestStart[`efficient`] +=  1;
        
    }

    const selectTwo = () => {

        no4TestStart[`improvisive`] +=  1;
        no4TestStart[`flexing`] +=  1;
        
    }












    return (

        <S.FirstView>
            <StatusBarView></StatusBarView>
            <PageIndicator></PageIndicator>
            <S.ImageView>
                <ImageImg source={require(`../../../../public/img/survay/question_page/4.png`)}/>
            </S.ImageView>

            <S.QuestionView>
                <QuestionText>What's in your bag? {"\n"}공항으로 가는 캐리어 속엔?</QuestionText>
            </S.QuestionView>

            <TouchableOpacity style={styles.touchableOpacity} onPress={() => {
                selectOne()
                navigation.navigate('QuestionNo5', {
                    no4TestResult : no4TestStart
            })
        }
            }>
                <S.ChoiceView >
                    <ChoiceText>가서 없어서 불편할 바엔 {"\n"}미리미리 챙겨가는게 맘이 편하지!</ChoiceText>
                </S.ChoiceView>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touchableOpacity} onPress={() => {
                selectTwo()
                navigation.navigate('QuestionNo5', {
                    no4TestResult : no4TestStart
            })
        }
            }>

                <S.ChoiceView >
                    <ChoiceText>원래 떠날 때 가볍게 가는거야!  {"\n"}가서 살게 얼마나 많은데?</ChoiceText>
                </S.ChoiceView>
            </TouchableOpacity>
           

        </S.FirstView>
    



    );
}




export function No5({ navigation, route }) {

    const {no4TestResult} = route.params
    const no5TestStart = {...no4TestResult}
    
    console.log(no5TestStart)
    
    const selectOne = () => {


        no5TestStart[`onPlanning`] +=  1;
        
    }

    const selectTwo = () => {

        no5TestStart[`relaxing`] +=  2;
        
    }
    
    const selectThree = () => {

        no5TestStart[`improvisive`] +=  1;
        no5TestStart[`exploring`] +=  1;
        
    }
    
    



    return (
        <ScrollView>

        <S.FirstView>
            <StatusBarView></StatusBarView>
            <PageIndicator></PageIndicator>
            <S.ImageView>
                <ImageImg source={require(`../../../../public/img/survay/question_page/5.png`)}/>
            </S.ImageView>

            <S.QuestionView>
                <QuestionText>두근두근 짐을 푼 당신,{"\n"}여행의 첫 걸음은 어디로?</QuestionText>
            </S.QuestionView>

            <TouchableOpacity style={styles.touchableOpacity} onPress={() => {
                selectOne()
                navigation.navigate('QuestionNo6', {
                    no5TestResult : no5TestStart
            })
        }
            }>
                <S.ChoiceView >
                    <ChoiceText>열심히 짠 일정, 하나씩 클리어하자!</ChoiceText>
                </S.ChoiceView>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touchableOpacity} onPress={() => {
                selectTwo()
                navigation.navigate('QuestionNo6', {
                    no5TestResult : no5TestStart
            })
        }
            }>

                <S.ChoiceView >
                    <ChoiceText>비행기에서만 몇시간인데...{"\n"}일단 좀 쉬고 근처로 움직이자.</ChoiceText>
                </S.ChoiceView>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableOpacity} onPress={() => {
                selectThree()
                navigation.navigate('QuestionNo6', {
                    no5TestResult : no5TestStart
            })
        }
            }>

                <S.ChoiceView >
                    <ChoiceText>발 닿는데로 가는게 여행이지!{"\n"}일단 여기저기 가보자구~</ChoiceText>
                </S.ChoiceView>
            </TouchableOpacity>
           

        </S.FirstView>
    

        </ScrollView>


    );
}




export function No6({ navigation, route }) {

    const {no5TestResult} = route.params
    const no6TestStart = {...no5TestResult}
    
    console.log(no6TestStart)
    
    const selectOne = () => {


        no6TestStart[`passionate`] +=  1;
        
    }

    const selectTwo = () => {

        no6TestStart[`relaxing`] +=  1;
        
    }
  
    

    return (

        <S.FirstView>
            <StatusBarView></StatusBarView>
            <PageIndicator></PageIndicator>
            <S.ImageView>
                <ImageImg source={require(`../../../../public/img/survay/question_page/6.png`)}/>
            </S.ImageView>

            <S.QuestionView>
                <QuestionText>여행지에서의 둘째날 아침, {"\n"}하루의 시작은 어떻게?</QuestionText>
            </S.QuestionView>

            <TouchableOpacity style={styles.touchableOpacity} onPress={() => {
                selectOne()
                navigation.navigate('QuestionNo7', {
                    no6TestResult : no6TestStart
            })
        }
            }>
                <S.ChoiceView >
                    <ChoiceText>알람 맞춰 일어나서 조식먹고!{"\n"}빠르게 씻고! 후딱 나가자!</ChoiceText>
                </S.ChoiceView>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touchableOpacity} onPress={() => {
                selectTwo()
                navigation.navigate('QuestionNo7', {
                    no6TestResult : no6TestStart
            })
        }
            }>

                <S.ChoiceView >
                    <ChoiceText>여행=휴가=힐링 아냐?{"\n"}잘만큼 자고 뒹굴다 나가자...</ChoiceText>
                </S.ChoiceView>
            </TouchableOpacity>
           

        </S.FirstView>
    



    );
}




export function No7({ navigation , route}) {

    const {no6TestResult} = route.params
    const no7TestStart = {...no6TestResult}
    
    console.log(no7TestStart)
    
    const selectOne = () => {


        no7TestStart[`onPlanning`] +=  1;
        no7TestStart[`safetyConcerning`] +=  1;
        
    }

    const selectTwo = () => {

        no7TestStart[`improvisive`] +=  1;
        no7TestStart[`exploring`] +=  1;
        
    }
    
  
    

    return (

        <S.FirstView>
            <StatusBarView></StatusBarView>
            <PageIndicator></PageIndicator>
            <S.ImageView>
                <ImageImg source={require(`../../../../public/img/survay/question_page/7.png`)}/>
            </S.ImageView>

            <S.QuestionView>
                <QuestionText>오늘의 종착지, 꼭 가보고 {"\n"}싶었던 식당이 문을 닫았다...</QuestionText>
            </S.QuestionView>

            <TouchableOpacity style={styles.touchableOpacity} onPress={() => {
                selectOne()
                navigation.navigate('QuestionNo8', {
                    no7TestResult : no7TestStart
            })
        }
            }>
                <S.ChoiceView >
                    <ChoiceText>이럴 줄 알고 주변을 살펴봤지.{"\n"}저장해둔 리뷰 높은 식당으로 가자!</ChoiceText>
                </S.ChoiceView>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touchableOpacity} onPress={() => {
                selectTwo()
                navigation.navigate('QuestionNo8', {
                    no7TestResult : no7TestStart
            })
        }
            }>

                <S.ChoiceView >
                    <ChoiceText>별 수 없지 뭐~ 나중에 다시 오고{"\n"}일단 둘러보고 다른데 가지 뭐!</ChoiceText>
                </S.ChoiceView>
            </TouchableOpacity>
           

        </S.FirstView>
    



    );
}



export function No8({ navigation, route }) {

    const {no7TestResult} = route.params
    const no8TestStart = {...no7TestResult}
    
    console.log(no8TestStart)
    
    const selectOne = () => {


        no8TestStart[`efficient`] +=  1;
        
    }

    const selectTwo = () => {

        no8TestStart[`flexing`] +=  2;
        
    }
    
 
    

    return (

        <S.FirstView>
            <StatusBarView></StatusBarView>
            <PageIndicator></PageIndicator>
            <S.ImageView>
                <ImageImg source={require(`../../../../public/img/survay/question_page/8.png`)}/>
            </S.ImageView>

            <S.QuestionView>
                <QuestionText>What's in your bag? {"\n"}귀국하는 당신의 가방은?</QuestionText>
            </S.QuestionView>

            <TouchableOpacity style={styles.touchableOpacity} onPress={() => {
                selectOne()
                navigation.navigate('QuestionNo9', {
                    no8TestResult : no8TestStart
            })
        }
            }>
                <S.ChoiceView >
                    <ChoiceText>미리미리 찾아왔지! {"\n"} 가성비 아이템들 구매 완료!</ChoiceText>
                </S.ChoiceView>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touchableOpacity} onPress={() => {
                selectTwo()
                navigation.navigate('QuestionNo9', {
                    no8TestResult : no8TestStart
            })
        }
            }>

                <S.ChoiceView >
                    <ChoiceText>남는 건 사진과 기념품이야!{"\n"}근데 왜 가방이 안잠기지...</ChoiceText>
                </S.ChoiceView>
            </TouchableOpacity>
           

        </S.FirstView>
    



    );
}




export function No9({ navigation, route }) {



    const {no8TestResult} = route.params
    const no9TestStart = {...no8TestResult}
    
    console.log(no9TestStart)
    
    let no9FinalResult = ' '


    const selectOne = () => {


        no9TestStart[`passionate`] +=  1;
    
    }

    const selectTwo = () => {

        no9TestStart[`relaxing`] +=  1;
        
    }
    


// 결과 내기 





    function randomValueFromArray(array) {
        const random = Math.floor(Math.random() * array.length);
        return array[random];
    }
    


    const sumUpFinalResult = (testResult) => {
        const testResultArray = Object.values(testResult)
        testResultArray.sort((a,b) => a-b )
        const hightestPoints = testResultArray[testResultArray.length-1]
        const yes = Object.entries(testResult)
        const yes2 = yes.filter(smallArray => smallArray[1] >= hightestPoints)
        no9FinalResult = randomValueFromArray(yes2)[0]


    }
    



    return (



        <S.FirstView>
            <StatusBarView></StatusBarView>
            <PageIndicator></PageIndicator>
            <S.ImageView>
                <ImageImg source={require(`../../../../public/img/survay/question_page/9.png`)}/>
            </S.ImageView>

            <S.QuestionView>
                <QuestionText>오늘은 슬프게도 귀국날... {"\n"}공항으로 가기 전 당신은?</QuestionText>
            </S.QuestionView>

            <TouchableOpacity style={styles.touchableOpacity} onPress={() => {
                selectOne()
                sumUpFinalResult(no9TestStart)
                navigation.navigate(`${no9FinalResult}`)
        }
            }>
                <S.ChoiceView >
                    <ChoiceText>비행기 타기 전까지 여행이야.{"\n"}아침 일찍 나가서 알차게 놀자!</ChoiceText>
                </S.ChoiceView>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touchableOpacity} onPress={() => {
                selectTwo()
                sumUpFinalResult(no9TestStart)
                navigation.navigate(`${no9FinalResult}`)


        }
            }>

                <S.ChoiceView >
                    <ChoiceText>푹 자고 일어나서 미리미리{"\n"}짐싸고 공항에 도착해서 쉰다.</ChoiceText>
                </S.ChoiceView>
            </TouchableOpacity>
           

        </S.FirstView>
    



    );
}
