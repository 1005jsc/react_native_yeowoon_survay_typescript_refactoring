import styled from 'styled-components/native'
import { Button, StyleSheet, Text, View } from 'react-native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;






export const FirstView = styled.View`

   
    flex: 1;
    align-items: center;
    position: relative;
    width: 100%;
    background: #FFFFFF;
    border: 1px solid #000000;

`






export const PageIndicator = styled.View`
    
    width: 90%;
    height: 18px;
    border-radius: 10px;
    margin-bottom: 30px;

    background-color: #8A7DCA;


`


export const ImageView = styled.View`
    width: 70%;
    height: 200px;
    margin-bottom: 30px;

`



export const QuestionView = styled.View`
    

width: 90%;
height: 140px;




`

export const ChoiceView = styled.View`

width: 80%;
// border: 2px solid #8A7DCA;
// padding-top: 10px; 
// padding-bottom: 10px; 
// margin-bottom: 30px;




// -webkit-box-shadow: 5px 5px 0px 0px #8A7DCA; 
// box-shadow: 5px 5px 0px 0px #8A7DCA;



`








export const QuestionText = styled.Text`
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 50px;

text-align: center;


`


export const ChoiceText = styled.Text`

font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 40px;

text-align: center;



`




