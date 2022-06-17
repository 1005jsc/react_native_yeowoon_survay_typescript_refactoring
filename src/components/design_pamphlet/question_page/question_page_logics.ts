// 점수

import { InterfaceOfGlobalLogic } from '../../../global_logic/global_logic';

export type TypeOfPersonalityPointsIndex =
  | 'improvisive'
  | 'exploring'
  | 'onPlanning'
  | 'efficient'
  | 'passionate'
  | 'flexing'
  | 'relaxing'
  | 'safetyConcerning';

type TypeOfPersonalityPoints = {
  [key in TypeOfPersonalityPointsIndex]: number;
};

const personalityPointsFromStart: TypeOfPersonalityPoints = {
  improvisive: 0,
  exploring: 0,
  onPlanning: 0,
  efficient: 0,
  passionate: 0,
  flexing: 0,
  relaxing: 0,
  safetyConcerning: 0,
};

export type TypeOfQuestionPageLogicAddPoints = (
  personalityIndex: TypeOfPersonalityPointsIndex,
  score: number
) => void;

export type TypeOfQuestionPageLogic = {
  personalityPointsFromStart: TypeOfPersonalityPoints;
  addPoints: TypeOfQuestionPageLogicAddPoints;
  resetPoints: () => void;
};

export const QuestionPageLogic: TypeOfQuestionPageLogic = {
  personalityPointsFromStart: personalityPointsFromStart,
  addPoints(personalityIndex: TypeOfPersonalityPointsIndex, score: number) {
    this.personalityPointsFromStart[personalityIndex] = +score;
  },
  resetPoints() {
    this.personalityPointsFromStart = personalityPointsFromStart;
  },
};

export interface InterfaceOfQuestionPageLogic {
  personalityPointsFromStart: TypeOfPersonalityPoints;
  addPoints: (personalityIndex: TypeOfPersonalityPointsIndex, score: number) => void;
  resetPoints: () => void;
  returnResult: (
    personalityPoints: TypeOfPersonalityPoints,
    globalLogic: InterfaceOfGlobalLogic
  ) => Array<any>;
}

class QuestionPageLogicClass {
  personalityPointsFromStart = personalityPointsFromStart;

  addPoints(personalityIndex: TypeOfPersonalityPointsIndex, score: number) {
    this.personalityPointsFromStart[personalityIndex] =
      this.personalityPointsFromStart[personalityIndex] + score;
  }
  resetPoints() {
    this.personalityPointsFromStart = personalityPointsFromStart;
  }

  returnResult(personalityPoints: TypeOfPersonalityPoints, globalLogic: InterfaceOfGlobalLogic) {
    const finalPoints = personalityPoints;
    const yes1 = Object.values(finalPoints);
    yes1.sort((a, b) => a - b);
    const highestPoints = yes1[yes1.length - 1];
    const yes2 = Object.entries(finalPoints);
    const yes3 = yes2.filter((smallArray) => smallArray[1] >= highestPoints);
    return globalLogic.randomValueFromArray(yes3)[0];
  }
}

export const QuestionPageLogic2: InterfaceOfQuestionPageLogic = new QuestionPageLogicClass();
