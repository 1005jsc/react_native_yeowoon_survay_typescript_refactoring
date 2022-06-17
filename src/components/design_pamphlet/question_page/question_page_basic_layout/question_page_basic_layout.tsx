import { nanoid } from 'nanoid';
import { ReactNode, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { InterfaceOfGlobalLogic } from '../../../../global_logic/global_logic';
import { TypeOfGlobalLogics } from '../../../../global_logic/global_logics';
import {
  InterfaceOfQuestionPageLogic,
  TypeOfPersonalityPointsIndex,
} from '../question_page_logics';
import * as B from './question_page_basic_layout.style';

const styles = StyleSheet.create({
  touchableOpacity: {
    borderColor: `#8A7DCA`,
    borderWidth: 2,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 14,
    paddingRight: 14,
    marginBottom: 30,
    // minHeight: 60,
  },
});

// 페이지 레이아웃

type TypeOfAddPointsParams = [personalityTypes: TypeOfPersonalityPointsIndex, score: number];
type TypeOfArrayOfAddPointsParams = TypeOfAddPointsParams[];
type TypeOfEachChoicesArray = [string, string, ...TypeOfArrayOfAddPointsParams];
type TypeOfChoicesArray = TypeOfEachChoicesArray[];

type QuestionPageBasicLayoutProps = {
  navigation: any;
  src: any;
  questionText: string | JSX.Element;
  toNextQuestion: string;
  choicesArray: TypeOfChoicesArray;
  children: ReactNode;
  globalLogics: TypeOfGlobalLogics;
  pageNumber: number;
};

export function QuestionPageBasicLayout({
  navigation,
  src,
  questionText,
  toNextQuestion,
  choicesArray,
  globalLogics,
  pageNumber,
}: QuestionPageBasicLayoutProps) {
  return (
    <B.FirstView>
      <B.StatusBarView></B.StatusBarView>
      <B.PageIndicator></B.PageIndicator>
      <B.ImageView>
        <B.ImageImg source={src} />
      </B.ImageView>
      <B.QuestionView>
        <B.QuestionText>
          {typeof questionText === 'string' ? (
            <B.QuestionText>{`${questionText}`}</B.QuestionText>
          ) : (
            <>{questionText}</>
          )}
        </B.QuestionText>
      </B.QuestionView>
      {choicesArray.map((value) => (
        <QuestionsLayout
          key={value[0]}
          navigation={navigation}
          toNextQuestion={toNextQuestion}
          choiceText={value[1]}
          choicesArray={choicesArray}
          questionPageLogic={globalLogics.questionPageLogic}
          globalLogic={globalLogics.globalLogic}
          choiceKey={value[0]}
          pageNumber={pageNumber}
        ></QuestionsLayout>
      ))}
    </B.FirstView>
  );
}

// 페이지 안에 들어갈 질문 레이아웃

type QuestionsLayoutProps = {
  navigation: any;
  toNextQuestion: string;
  choiceText: string;
  choicesArray: TypeOfChoicesArray;
  questionPageLogic: InterfaceOfQuestionPageLogic;
  choiceKey: string;
  pageNumber: number;
  globalLogic: InterfaceOfGlobalLogic;
};

export function QuestionsLayout({
  navigation,
  toNextQuestion,
  choiceText,
  choicesArray,
  choiceKey,
  questionPageLogic,
  pageNumber,
  globalLogic,
}: QuestionsLayoutProps) {
  const addPoints = (id: string) => {
    choicesArray.forEach((eachChoicesArray) => {
      if (eachChoicesArray[0] === id) {
        const yes = eachChoicesArray.slice(2, eachChoicesArray.length);
        yes.forEach((value) => {
          questionPageLogic.addPoints(value[0] as TypeOfPersonalityPointsIndex, value[1] as number);
        });
      }
    });
  };

  const returnPoints = () => {
    const yes = questionPageLogic.returnResult(
      questionPageLogic.personalityPointsFromStart,
      globalLogic
    );
    return yes;
  };

  return (
    <TouchableOpacity
      style={styles.touchableOpacity}
      onPress={() => {
        addPoints(choiceKey);
        if (pageNumber !== 9) {
          navigation.navigate(`${toNextQuestion}`);
        } else {
          const yo = returnPoints();
          questionPageLogic.resetPoints();
          navigation.navigate(`${yo}`);
        }
      }}
    >
      <B.ChoiceView>
        <B.ChoiceText>{choiceText}</B.ChoiceText>
      </B.ChoiceView>
    </TouchableOpacity>
  );
}
