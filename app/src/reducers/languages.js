const initialState = [
  {
    languageName: "English",
    level: "Basic knowledge",
  },
  {
    languageName: "French",
    level: "Basic knowledge",
  },
  {
    languageName: "Dutch",
    level: "Basic knowledge",
  }
];

const RESET = "LANGUAGES_RESET";
const SET_LANGUAGE_LEVEL = "SET_LANGUAGE_LEVEL"

const languages = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_LANGUAGE_LEVEL:
      return [
        ...state.map((language, index) => {
          if(index === payload.languageIndex) {
            language.level = payload.level
          }
          return language
        })
      ]
    case RESET:
      return initialState
    default:
      return state
  }
}

export default languages;

export const setLanguageLevelForIndex = (languageIndex, level) => ({
  type: SET_LANGUAGE_LEVEL,
  payload: {
    languageIndex,
    level
  },
})

export const reset = () => ({type: RESET})
