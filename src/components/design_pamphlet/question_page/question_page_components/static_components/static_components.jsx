import React from 'react';
import { TouchableOpacity } from 'react-native-web';
import * as S from './static_components.style'


export const FirstView = ({children}) => {
    return <S.FirstView>{children}</S.FirstView>
}

export const QuestionView = ({children}) => {
    return <S.QuestionView>{children}</S.QuestionView>
}

export const ChoiceView = ({children}) => {
    return <S.ChoiceView>{children}</S.ChoiceView>
}


export const StatusBar = ({children}) => {
    return <S.PageIndicator>{children}</S.PageIndicator>
}


export const ImageView = ({children}) => {
    return <S.ImageView>{children}</S.ImageView>
}
