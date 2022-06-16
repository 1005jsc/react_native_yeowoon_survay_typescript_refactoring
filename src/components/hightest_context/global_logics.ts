import {
  InterfaceOfQuestionPageLogic,
  QuestionPageLogic,
  QuestionPageLogic2,
  TypeOfQuestionPageLogic,
} from '../design_pamphlet/question_page/question_page_logics';

export type TypeOfGlobalLogics = {
  questionPageLogic: TypeOfQuestionPageLogic;
  questionPageLogic2: InterfaceOfQuestionPageLogic;
};

export const GlobalLogics: TypeOfGlobalLogics = {
  questionPageLogic: QuestionPageLogic,
  questionPageLogic2: QuestionPageLogic2,
};
