import { nanoid } from 'nanoid';
import { ScrollView, View } from 'react-native';
import { GlobalLogics } from '../../../global_logic/global_logics';
import { useHighestContext } from '../../hightest_context/highest_context';
import { QuestionPageBasicLayout } from './question_page_basic_layout/question_page_basic_layout';

export function No1({ navigation }: any) {
  const highestContext = useHighestContext();

  return (
    <QuestionPageBasicLayout
      navigation={navigation}
      src={require(`../../../../public/img/survay/question_page/1.png`)}
      questionText={`어느새 다가온 휴가 시즌... ${'\n'}여행을 어떻게 준비할까?`}
      toNextQuestion={`QuestionNo2`}
      choicesArray={[
        [nanoid(), `떠날 나라와 지역이면 충분하지!`, ['improvisive', 1], ['exploring', 1]],
        [
          nanoid(),
          `저렴한 항공부터 인기 장소까지!${'\n'}꼼꼼한 준비가 후회가 없는 법!`,
          ['onPlanning', 1],
          ['efficient', 1],
        ],
      ]}
      globalLogics={highestContext}
      children={undefined}
      pageNumber={1}
    ></QuestionPageBasicLayout>
  );
}

export function No2({ navigation }: any) {
  const highestContext = useHighestContext();

  return (
    <QuestionPageBasicLayout
      navigation={navigation}
      src={require(`../../../../public/img/survay/question_page/2.png`)}
      questionText={`원래 예산은 200만인 상황, ${'\n'}하고 싶은 걸 하면 예산 초과라면?`}
      toNextQuestion={`QuestionNo3`}
      choicesArray={[
        [nanoid(), `이번만 여행인가? 현생 살아야지!`, ['onPlanning', 1], ['efficient', 1]],
        [
          nanoid(),
          `오늘을 위해서 열심히 일했지.${'\n'}여행에서만큼은 아끼지 않는다!`,
          ['passionate', 1],
          ['flexing', 1],
        ],
      ]}
      children={undefined}
      globalLogics={highestContext}
      pageNumber={2}
    ></QuestionPageBasicLayout>
  );
}

export function No3({ navigation }: any) {
  const highestContext = useHighestContext();

  return (
    <ScrollView>
      <QuestionPageBasicLayout
        navigation={navigation}
        src={require(`../../../../public/img/survay/question_page/3.png`)}
        questionText={`이번 휴가에 여행을 떠난다면, ${'\n'}어떤 컨셉으로 즐겨볼까?`}
        toNextQuestion={`QuestionNo4`}
        choicesArray={[
          [nanoid(), `여유로운 호캉스와 휴양지는 사랑.`, ['relaxing', 1], ['flexing', 1]],
          [
            nanoid(),
            `아무래도 깨끗하고 치안이 좋은 곳,${'\n'}그리고 유명한 곳이 좋지 않나?`,
            ['safetyConcerning', 2],
          ],
          [nanoid(), `액티비티와 색다른 경험을 찾아!`, ['passionate', 1], ['exploring', 1]],
        ]}
        children={undefined}
        globalLogics={highestContext}
        pageNumber={3}
      ></QuestionPageBasicLayout>
    </ScrollView>
  );
}

export function No4({ navigation }: any) {
  const highestContext = useHighestContext();

  return (
    <ScrollView>
      <QuestionPageBasicLayout
        navigation={navigation}
        src={require(`../../../../public/img/survay/question_page/4.png`)}
        questionText={`What's in your bag? ${'\n'}공항으로 가는 캐리어 속엔?`}
        toNextQuestion={`QuestionNo5`}
        choicesArray={[
          [
            nanoid(),
            `가서 없어서 불편할 바엔 ${'\n'}미리미리 챙겨가는게 맘이 편하지!`,
            ['safetyConcerning', 1],
            ['efficient', 1],
          ],
          [
            nanoid(),
            `원래 떠날 때 가볍게 가는거야!  ${'\n'}가서 살게 얼마나 많은데?`,
            ['improvisive', 1],
            ['flexing', 1],
          ],
        ]}
        children={undefined}
        globalLogics={highestContext}
        pageNumber={4}
      ></QuestionPageBasicLayout>
    </ScrollView>
  );
}

export function No5({ navigation }: any) {
  const highestContext = useHighestContext();

  return (
    <ScrollView>
      <QuestionPageBasicLayout
        navigation={navigation}
        src={require(`../../../../public/img/survay/question_page/5.png`)}
        questionText={`두근두근 짐을 푼 당신,${'\n'}여행의 첫 걸음은 어디로?`}
        toNextQuestion={`QuestionNo6`}
        choicesArray={[
          [nanoid(), `열심히 짠 일정, 하나씩 클리어하자!`, ['onPlanning', 1]],
          [
            nanoid(),
            `비행기에서만 몇시간인데...${'\n'}일단 좀 쉬고 근처로 움직이자.`,
            ['relaxing', 2],
          ],
          [
            nanoid(),
            `발 닿는데로 가는게 여행이지!${'\n'}일단 여기저기 가보자구~`,
            ['improvisive', 1],
            ['exploring', 1],
          ],
        ]}
        children={undefined}
        globalLogics={highestContext}
        pageNumber={5}
      ></QuestionPageBasicLayout>
    </ScrollView>
  );
}

export function No6({ navigation }: any) {
  const highestContext = useHighestContext();

  return (
    <ScrollView>
      <QuestionPageBasicLayout
        navigation={navigation}
        src={require(`../../../../public/img/survay/question_page/6.png`)}
        questionText={`여행지에서의 둘째날 아침, ${'\n'}하루의 시작은 어떻게?`}
        toNextQuestion={`QuestionNo7`}
        choicesArray={[
          [
            nanoid(),
            `알람 맞춰 일어나서 조식먹고!${'\n'}빠르게 씻고! 후딱 나가자!`,
            ['passionate', 1],
          ],
          [nanoid(), `여행=휴가=힐링 아냐?${'\n'}잘만큼 자고 뒹굴다 나가자...`, ['relaxing', 1]],
        ]}
        children={undefined}
        globalLogics={highestContext}
        pageNumber={6}
      ></QuestionPageBasicLayout>
    </ScrollView>
  );
}

export function No7({ navigation }: any) {
  const highestContext = useHighestContext();

  return (
    <ScrollView>
      <QuestionPageBasicLayout
        navigation={navigation}
        src={require(`../../../../public/img/survay/question_page/7.png`)}
        questionText={`오늘의 종착지, 꼭 가보고 ${'\n'}싶었던 식당이 문을 닫았다...`}
        toNextQuestion={`QuestionNo8`}
        choicesArray={[
          [
            nanoid(),
            `이럴 줄 알고 주변을 살펴봤지.${'\n'}저장해둔 리뷰 높은 식당으로 가자!`,
            ['onPlanning', 1],
            ['safetyConcerning', 1],
          ],
          [
            nanoid(),
            `별 수 없지 뭐~ 나중에 다시 오고${'\n'}일단 둘러보고 다른데 가지 뭐!`,
            ['improvisive', 1],
            ['exploring', 1],
          ],
        ]}
        children={undefined}
        globalLogics={highestContext}
        pageNumber={7}
      ></QuestionPageBasicLayout>
    </ScrollView>
  );
}

export function No8({ navigation }: any) {
  const highestContext = useHighestContext();

  return (
    <ScrollView>
      <QuestionPageBasicLayout
        navigation={navigation}
        src={require(`../../../../public/img/survay/question_page/8.png`)}
        questionText={`What's in your bag? ${'\n'}귀국하는 당신의 가방은?`}
        toNextQuestion={`QuestionNo9`}
        choicesArray={[
          [nanoid(), `미리미리 찾아왔지! ${'\n'} 가성비 아이템들 구매 완료!`, ['efficient', 1]],
          [nanoid(), `남는 건 사진과 기념품이야!${'\n'}근데 왜 가방이 안잠기지...`, ['flexing', 2]],
        ]}
        children={undefined}
        globalLogics={highestContext}
        pageNumber={8}
      ></QuestionPageBasicLayout>
    </ScrollView>
  );
}

export function No9({ navigation }: any) {
  const highestContext = useHighestContext();

  return (
    <ScrollView>
      <QuestionPageBasicLayout
        navigation={navigation}
        src={require(`../../../../public/img/survay/question_page/9.png`)}
        questionText={`오늘은 슬프게도 귀국날... ${'\n'}공항으로 가기 전 당신은?`}
        toNextQuestion={`QuestionNo1`}
        choicesArray={[
          [
            nanoid(),
            `비행기 타기 전까지 여행이야.${'\n'}아침 일찍 나가서 알차게 놀자!`,
            ['passionate', 1],
          ],
          [
            nanoid(),
            `푹 자고 일어나서 미리미리${'\n'}짐싸고 공항에 도착해서 쉰다.`,
            ['relaxing', 1],
          ],
        ]}
        children={undefined}
        globalLogics={highestContext}
        pageNumber={9}
      ></QuestionPageBasicLayout>
    </ScrollView>
  );
}
