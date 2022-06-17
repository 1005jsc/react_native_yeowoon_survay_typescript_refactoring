// import { nanoid } from 'nanoid';
// import { ReactNode } from 'react';
// import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
// import { TypeOfGlobalLogics } from '../../../hightest_context/global_logics';
// import {
//   TypeOfPersonalityPointsIndex,
//   TypeOfQuestionPageLogic,
//   TypeOfQuestionPageLogicAddPoints,
// } from '../question_page_logics';
// import * as B from './question_page_basic_layout.style';

// const styles = StyleSheet.create({
//   touchableOpacity: {
//     borderColor: `#8A7DCA`,
//     borderWidth: 2,
//     paddingTop: 10,
//     paddingBottom: 10,
//     paddingLeft: 14,
//     paddingRight: 14,
//     marginBottom: 30,
//     // minHeight: 60,
//   },
// });

// // 페이지 레이아웃

// type TypeOfAddPointsParams = [personalityTypes: TypeOfPersonalityPointsIndex, score: number];

// type TypeOfArrayOfAddPointsParams = TypeOfAddPointsParams[];

// type TypeOfEachQuestionArray = [string, ...TypeOfArrayOfAddPointsParams];
// type TypeOfQuestionsArray = TypeOfEachQuestionArray[];

// type QuestionPageBasicLayoutProps = {
//   navigation: any;
//   src: any;
//   questionText: string | JSX.Element;
//   toNextQuestion: string;
//   questionsArray: TypeOfQuestionsArray;
//   children: ReactNode;
//   globalLogics: TypeOfGlobalLogics;
// };

// export function QuestionPageBasicLayout({
//   navigation,
//   src,
//   questionText,
//   toNextQuestion,
//   questionsArray,
//   globalLogics,
// }: QuestionPageBasicLayoutProps) {
//   return (
//     <B.FirstView>
//       <B.StatusBarView></B.StatusBarView>
//       <B.PageIndicator></B.PageIndicator>
//       <B.ImageView>
//         <B.ImageImg source={src} />
//       </B.ImageView>
//       <B.QuestionView>
//         {typeof questionText === 'string' ? (
//           <B.QuestionText>{`${questionText}`}</B.QuestionText>
//         ) : (
//           <>{questionText}</>
//         )}
//       </B.QuestionView>
//       {questionsArray.map((value) => (
//         <QuestionsLayout
//           key={nanoid()}
//           navigation={navigation}
//           toNextQuestion={toNextQuestion}
//           choiceText={value[0]}
//           addPointParams={questionsArray}
//           questionPageLogic={globalLogics.questionPageLogic}
//         ></QuestionsLayout>
//       ))}
//     </B.FirstView>
//   );
// }

// // 페이지 안에 들어갈 질문 레이아웃

// type QuestionsLayoutProps = {
//   navigation: any;
//   toNextQuestion: string;
//   choiceText: string;
//   addPointParams: TypeOfQuestionsArray;
//   questionPageLogic: TypeOfQuestionPageLogic;
// };

// export function QuestionsLayout({
//   navigation,
//   toNextQuestion,
//   choiceText,
//   addPointParams,
//   questionPageLogic,
// }: QuestionsLayoutProps) {
//   const addPoints = () => {
//     const addPointsArray1 = addPointParams.slice(1, addPointParams.length);
//     console.log(addPointsArray1);
//   };

//   return (
//     <TouchableOpacity
//       style={styles.touchableOpacity}
//       onPress={() => {
//         addPoints();
//         navigation.navigate(`${toNextQuestion}`);
//       }}
//     >
//       <B.ChoiceView>
//         <B.ChoiceText>{choiceText}</B.ChoiceText>
//       </B.ChoiceView>
//     </TouchableOpacity>
//   );
// }
