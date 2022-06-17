import {
  InterfaceOfQuestionPageLogic,
  QuestionPageLogic,
  QuestionPageLogic2,
  TypeOfQuestionPageLogic,
} from '../components/design_pamphlet/question_page/question_page_logics';
import { GlobalLogicObject, InterfaceOfGlobalLogic } from './global_logic';

export type TypeOfGlobalLogics = {
  questionPageLogic: TypeOfQuestionPageLogic;
  questionPageLogic2: InterfaceOfQuestionPageLogic;
  globalLogic: InterfaceOfGlobalLogic;
};

export const GlobalLogics: TypeOfGlobalLogics = {
  questionPageLogic: QuestionPageLogic,
  questionPageLogic2: QuestionPageLogic2,
  globalLogic: GlobalLogicObject,
};
