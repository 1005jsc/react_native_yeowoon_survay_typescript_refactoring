import {
  InterfaceOfQuestionPageLogic,
  QuestionPageLogic2,
} from '../components/design_pamphlet/question_page/question_page_logics';
import { GlobalLogicObject, InterfaceOfGlobalLogic } from './global_logic';

export type TypeOfGlobalLogics = {
  questionPageLogic2: InterfaceOfQuestionPageLogic;
  globalLogic: InterfaceOfGlobalLogic;
};

export const GlobalLogics: TypeOfGlobalLogics = {
  questionPageLogic2: QuestionPageLogic2,
  globalLogic: GlobalLogicObject,
};
