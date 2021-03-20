import { LanguageType } from "../constants/types";


/**
* SayHello Interface info
* @param name string
*/
export interface SayHello {
  name: string;
  language?: LanguageType
}

export interface SayHelloDOM extends SayHello {
  elementId: string;
}