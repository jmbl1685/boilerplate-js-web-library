export const LanguagesTypeArray = <const>[
  'spanish',
  'english',
  'french'
];

export type LanguageType = typeof LanguagesTypeArray[number];

export type LanguageKeyType<T> = { [language in LanguageType]: T };