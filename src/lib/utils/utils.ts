import { LanguageType, LanguageKeyType } from "../constants/types";

export function getHelloByLanguage(language: LanguageType) {

  const obj: LanguageKeyType<string> = {
    'spanish': 'Hola!',
    'english': 'Hi!',
    'french': 'Salut!'
  };

  return obj[language] || obj['english'];
}