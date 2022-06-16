// 점수

type TypeOfPersonaltyPointsIndex =
  | 'improvisive'
  | 'exploring'
  | 'onPlanning'
  | 'efficient'
  | 'passionate'
  | 'flexing'
  | 'relaxing'
  | 'safetyConcerning';

type TypeOfPersonalityPointsFromStart = {
  // improvisive: number;
  // exploring: number;
  // onPlanning: number;
  // efficient: number;
  // passionate: number;
  // flexing: number;
  // relaxing: number;
  // safetyConcerning: number;
};

export const personalityPointsFromStart: TypeOfPersonalityPointsFromStart = {
  improvisive: 0,
  exploring: 0,
  onPlanning: 0,
  efficient: 0,
  passionate: 0,
  flexing: 0,
  relaxing: 0,
  safetyConcerning: 0,
};

export type TypeOfAppLogics = {};

export const AppLogics = ({}: TypeOfAppLogics) => {};

export const QuestionPageLogic = {
  personalityPointsFromStart: personalityPointsFromStart,
  addPoints() {},
};
