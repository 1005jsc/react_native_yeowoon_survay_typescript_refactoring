export interface InterfaceOfGlobalLogic {
  randomValueFromArray: (array: Array<any>) => Array<any>;
}

class GlobalLogic implements InterfaceOfGlobalLogic {
  randomValueFromArray(array: Array<any>) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
  }
}

export const GlobalLogicObject = new GlobalLogic();
