import { LanguageType } from "../constants/types";
export interface SayHello {
  name: string;
  language?: LanguageType
}
export interface SayHelloDOM extends SayHello {
  elementId: string;
}