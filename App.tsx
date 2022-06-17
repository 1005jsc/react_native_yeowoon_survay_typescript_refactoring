import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as QuestionPage from './src/components/design_pamphlet/question_page/question_page_designs';
import * as ResultPageDesign from './src/components/design_pamphlet/result_page/result_page_design';
// import {
//   Efficient,
//   Exploring,
//   Flexing,
//   Improvisive,
//   OnPlanning,
//   Passionate,
//   Relaxing,
//   SafetyConcerning,
// } from './src/components/design_pamphlet/result_page/result_page_design';
import { SurvayStart } from './src/components/design_pamphlet/survay_start/survay_start_design';
import { HighestProvider } from './src/components/hightest_context/highest_context';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.tsx to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

type RootStackParamList = {
  SurvayStart: undefined;
  QuestionNo1: undefined;
  QuestionNo2: undefined;
  QuestionNo3: undefined;
  QuestionNo4: undefined;
  QuestionNo5: undefined;
  QuestionNo6: undefined;
  QuestionNo7: undefined;
  QuestionNo8: undefined;
  QuestionNo9: undefined;
  improvisive: undefined;
  exploring: undefined;
  onPlanning: undefined;
  efficient: undefined;
  passionate: undefined;
  flexing: undefined;
  relaxing: undefined;
  safetyConcerning: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    // <HighestProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SurvayStart">
        {/* 여행전 당신은? */}
        <Stack.Screen name="SurvayStart" component={SurvayStart} options={{ headerShown: false }} />
        <Stack.Screen
          name="QuestionNo1"
          component={QuestionPage.No1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QuestionNo2"
          component={QuestionPage.No2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QuestionNo3"
          component={QuestionPage.No3}
          options={{ headerShown: false }}
        />
        {/* 여행 후 당신은? */}
        <Stack.Screen
          name="QuestionNo4"
          component={QuestionPage.No4}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QuestionNo5"
          component={QuestionPage.No5}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QuestionNo6"
          component={QuestionPage.No6}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QuestionNo7"
          component={QuestionPage.No7}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QuestionNo8"
          component={QuestionPage.No8}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QuestionNo9"
          component={QuestionPage.No9}
          options={{ headerShown: false }}
        />
        {/* 테스트 결과 */}
        <Stack.Screen
          name="improvisive"
          component={ResultPageDesign.Improvisive}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="exploring"
          component={ResultPageDesign.Exploring}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="onPlanning"
          component={ResultPageDesign.OnPlanning}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="efficient"
          component={ResultPageDesign.Efficient}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="passionate"
          component={ResultPageDesign.Passionate}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="flexing"
          component={ResultPageDesign.Flexing}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="relaxing"
          component={ResultPageDesign.Relaxing}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="safetyConcerning"
          component={ResultPageDesign.SafetyConcerning}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // </HighestProvider>
  );
}
