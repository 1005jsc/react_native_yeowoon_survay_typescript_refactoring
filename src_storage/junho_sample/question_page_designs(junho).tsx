// import { ScrollView, View } from 'react-native';
// import { GlobalLogics } from '../global_logic/global_logics';
// import { QuestionPageBasicLayout } from './question_page_basic_layout(junho)';

// export function No1({ navigation }: any) {
//   return (
//     <QuestionPageBasicLayout
//       navigation={navigation}
//       src={require(`../../../../public/img/survay/question_page/1.png`)}
//       questionText={`어느새 다가온 휴가 시즌... ${'\n'}여행을 어떻게 준비할까?`}
//       toNextQuestion={`QuestionNo2`}
//       questionsArray={[
//         [`떠날 나라와 지역이면 충분하지!`, ['improvisive', 1], ['exploring', 1]],
//         [
//           `저렴한 항공부터 인기 장소까지!${'\n'}꼼꼼한 준비가 후회가 없는 법!`,
//           ['onPlanning', 1],
//           ['efficient', 1],
//         ],
//       ]}
//       globalLogics={GlobalLogics}
//       children={undefined}
//     ></QuestionPageBasicLayout>
//   );
// }

// export function No2({ navigation }: any) {
//   return (
//     <QuestionPageBasicLayout
//       navigation={navigation}
//       src={require(`../../../../public/img/survay/question_page/2.png`)}
//       questionText={<span>원래 예산은 200만인 상황, ${'\n'}하고 싶은 걸 하면 예산 초과라면?</span>}
//       toNextQuestion={`QuestionNo3`}
//       questionsArray={[
//         [`이번만 여행인가? 현생 살아야지!`, ['onPlanning', 1], ['efficient', 1]],
//         [
//           `오늘을 위해서 열심히 일했지.${'\n'}여행에서만큼은 아끼지 않는다!`,
//           ['passionate', 1],
//           ['flexing', 1],
//         ],
//       ]}
//       children={undefined}
//       globalLogics={GlobalLogics}
//     ></QuestionPageBasicLayout>
//   );
// }

// export function No3({ navigation }: any) {
//   return (
//     <ScrollView>
//       <QuestionPageBasicLayout
//         navigation={navigation}
//         src={require(`../../../../public/img/survay/question_page/3.png`)}
//         questionText={`이번 휴가에 여행을 떠난다면, ${'\n'}어떤 컨셉으로 즐겨볼까?`}
//         toNextQuestion={`QuestionNo4`}
//         questionsArray={[
//           [`여유로운 호캉스와 휴양지는 사랑.`, ['relaxing', 1], ['flexing', 1]],
//           [
//             `아무래도 깨끗하고 치안이 좋은 곳,${'\n'}그리고 유명한 곳이 좋지 않나?`,
//             ['safetyConcerning', 2],
//           ],
//           [`액티비티와 색다른 경험을 찾아!`, ['passionate', 1], ['exploring', 1]],
//         ]}
//         children={undefined}
//         globalLogics={GlobalLogics}
//       ></QuestionPageBasicLayout>
//     </ScrollView>
//   );
// }
