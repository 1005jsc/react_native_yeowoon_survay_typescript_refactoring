import { ReactNode } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { TypeOfQuestionPageLogic } from '../../../hightest_context/app_logics';
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

type QuestionPageBasicLayoutProps = {
  navigation: any;
  src: any;
  questionText: string;
  toNextQuestion: string;
  questionsArray: string[];
  children: ReactNode;
  appLogics: TypeOfQuestionPageLogic;
};

export function QuestionPageBasicLayout({
  navigation,
  src,
  questionText,
  toNextQuestion,
  questionsArray,
  appLogics,
}: QuestionPageBasicLayoutProps) {
  return (
    <B.FirstView>
      <B.StatusBarView></B.StatusBarView>
      <B.PageIndicator></B.PageIndicator>
      <B.ImageView>
        <B.ImageImg source={src} />
      </B.ImageView>
      <B.QuestionView>
        <B.QuestionText>{`${questionText}`}</B.QuestionText>
      </B.QuestionView>
      {questionsArray.map((eachQuestionText) => (
        <QuestionsLayout
          key={eachQuestionText}
          navigation={navigation}
          toNextQuestion={toNextQuestion}
          choiceText={eachQuestionText}
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
};

export function QuestionsLayout({ navigation, toNextQuestion, choiceText }: QuestionsLayoutProps) {
  return (
    <TouchableOpacity
      style={styles.touchableOpacity}
      onPress={() => {
        navigation.navigate(`${toNextQuestion}`);
      }}
    >
      <B.ChoiceView>
        <B.ChoiceText>{choiceText}</B.ChoiceText>
      </B.ChoiceView>
    </TouchableOpacity>
  );
}
