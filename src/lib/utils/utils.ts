import { LanguageType, LanguageKeyType } from "../constants/types";

export function getHelloByLanguage(language: LanguageType) {

  const obj: LanguageKeyType<string> = {
    'spanish': 'Hola!',
    'english': 'Hi!',
    'french': 'Salut!'
  };

  const response = obj[language] || obj['english'];

  return response;
}