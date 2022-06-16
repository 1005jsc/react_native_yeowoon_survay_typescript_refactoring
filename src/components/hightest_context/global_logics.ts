import {
  QuestionPageLogic,
  TypeOfQuestionPageLogic,
} from '../design_pamphlet/question_page/question_page_logics';

export type TypeOfGlobalLogics = {
  questionPageLogic: TypeOfQuestionPageLogic;
};

export const GlobalLogics: TypeOfGlobalLogics = {
  questionPageLogic: QuestionPageLogic,
};
