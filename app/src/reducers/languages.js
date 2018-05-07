const initialState = [];

const RESET = "LANGUAGES_RESET";
const ADD_LANGUAGE = "ADD_LANGUAGE"
const REMOVE_LANGUAGE = "REMOVE_LANGUAGE"
const SET_LANGUAGE_LEVEL = "SET_LANGUAGE_LEVEL"

const languages = (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_LANGUAGE:
      return [
        ...state,
        payload
      ]
    case REMOVE_LANGUAGE:
      return [
        ...state.filter((experience, index) => index !== payload)
      ]
    case SET_LANGUAGE_LEVEL:
      return [
        ...state.map((experience, index) => {
          if(index === payload.languageIndex) {
            experience.level = payload.level
          }
          return experience
        })
      ]
    case RESET:
      return initialState
    default:
      return state
  }
}

export default languages;

export const addLanguage = languageName => ({
  type: ADD_LANGUAGE,
  payload: {
    languageName: languageName,
    level: "Basic knowledge",
  }
})

export const removeLanguageAtIndex = languageIndex => ({
  type: REMOVE_LANGUAGE,
  payload: languageIndex,
})

export const setLanguageLevelForIndex = (languageIndex, level) => ({
  type: SET_LANGUAGE_LEVEL,
  payload: {
    languageIndex,
    level
  },
})

export const reset = () => ({type: RESET})
