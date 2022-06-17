import { ScrollView } from 'react-native';
import { ImageImg, StatusBarView } from '../../common_components/common_components.style';
import * as R from './result_page_basic_layout.style';

type ResultPageBasicLayoutProps = {
  navigation: any;
  src: any;
  resultText: string;
  hashTagText: string;
  typeExplanationView1Text: string;
};

export const ResultPageBasicLayout = ({
  resultText,
  src,
  hashTagText,
  typeExplanationView1Text,
}: ResultPageBasicLayoutProps) => {
  return (
    <ScrollView>
      <R.FirstView>
        <StatusBarView></StatusBarView>

        <R.LogoView>
          <R.LogoText>Yeowoon</R.LogoText>
        </R.LogoView>

        <R.TitleView>
          <R.TitleText>나의 여행자 유형은?</R.TitleText>
        </R.TitleView>

        <R.ResultView>
          <R.ResultText>{resultText}</R.ResultText>
        </R.ResultView>

        <R.ImageView>
          <ImageImg source={src} />
        </R.ImageView>

        <R.HashTagView>
          <R.HashTagText>{hashTagText}</R.HashTagText>
        </R.HashTagView>

        <R.TypeExplanationView1>
          <R.TypeExplanationView1Text>{typeExplanationView1Text}</R.TypeExplanationView1Text>
        </R.TypeExplanationView1>

        <R.TypeExplanationView1></R.TypeExplanationView1>

        <R.TypeExplanationView1></R.TypeExplanationView1>

        <R.TypeExplanationView2></R.TypeExplanationView2>

        <R.TypeExplanationView3></R.TypeExplanationView3>

        <R.ButtonToTripDiaryView>
          <R.ButtonToTripDiaryText>여운 App으로 나의 {'\n'}여행 기록해보기</R.ButtonToTripDiaryText>
        </R.ButtonToTripDiaryView>

        <R.ButtonToKakaotalkShareView>
          <R.ButtonToKakaotalkShareText>친구에게 내 결과 공유하기</R.ButtonToKakaotalkShareText>
        </R.ButtonToKakaotalkShareView>
      </R.FirstView>
    </ScrollView>
  );
};
