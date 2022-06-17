import {
  InterfaceOfQuestionPageLogic,
  QuestionPageLogic,
} from '../components/design_pamphlet/question_page/question_page_logics';
import { GlobalLogicObject, InterfaceOfGlobalLogic } from './global_logic';

export type TypeOfGlobalLogics = {
  questionPageLogic: InterfaceOfQuestionPageLogic;
  globalLogic: InterfaceOfGlobalLogic;
};

export const GlobalLogics: TypeOfGlobalLogics = {
  questionPageLogic: QuestionPageLogic,
  globalLogic: GlobalLogicObject,
};
