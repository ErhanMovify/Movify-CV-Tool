const initialState = [
  {
    languageName: 'English',
    level: 'Basic knowledge',
    isDefault: true,
  },
  {
    languageName: 'French',
    level: 'Basic knowledge',
    isDefault: true,
  },
  {
    languageName: 'Dutch',
    level: 'Basic knowledge',
    isDefault: true,
  },
];

const DEFAULT_LANGUAGE = {
  languageName: '',
  level: 'Basic knowledge',
};

const RESET = 'LANGUAGES_RESET';
const SET_LANGUAGE_LEVEL = 'LANGUAGES_SET_LANGUAGE_LEVEL';
const ADD_LANGUAGE = 'LANGUAGES_ADD_LANGUAGE';
const UPDATE_LANGUAGE = 'LANGUAGES_UPDATE_LANGUAGE';
const REMOVE_LANGUAGE = 'LANGUAGES_REMOVE_LANGUAGE';

const languages = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_LANGUAGE:
      return [...state, { ...DEFAULT_LANGUAGE }];
    case REMOVE_LANGUAGE:
      return [
        ...state.filter((_, index) => index !== payload),
      ];
    case UPDATE_LANGUAGE:
      return [
        ...state.map((language, index) => (index === payload.index ? { ...payload.language } : language)),
      ];
    case SET_LANGUAGE_LEVEL:
      return [
        ...state.map((language, index) => {
          if (index === payload.languageIndex) {
            return {
              ...language,
              level: payload.level,
            };
          }
          return language;
        }),
      ];
    case RESET:
      return initialState;
    default:
      return state;
  }
};

export default languages;

export const addLanguage = () => ({ type: ADD_LANGUAGE });

export const removeLanguageAtIndex = index => ({ type: REMOVE_LANGUAGE, payload: index });

export const updateLanguageAtIndex = (language, index) => ({
  type: UPDATE_LANGUAGE,
  payload: { index, language },
});

export const setLanguageLevelForIndex = (languageIndex, level) => ({
  type: SET_LANGUAGE_LEVEL,
  payload: {
    languageIndex,
    level,
  },
});

export const reset = () => ({ type: RESET });
