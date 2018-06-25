const initialState = [];

const DEFAULT_EXPERIENCE = {
  companyName: '',
  role: '',
  tasks: '',
  methodology: '',
  tools: '',
  period: ''
}

const RESET = "PROFESSIONAL_EXPERIENCES_RESET";
const ADD_EXPERIENCE = "PROFESSIONAL_EXPERIENCES_ADD_EXPERIENCE"
const REMOVE_EXPERIENCE = "PROFESSIONAL_EXPERIENCES_REMOVE_EXPERIENCE"
const UPDATE_EXPERIENCE = "PROFESSIONAL_EXPERIENCES_UPDATE_EXPERIENCE"
const MOVE_EXPERIENCE_UP = "MOVE_EXPERIENCE_UP"
const MOVE_EXPERIENCE_DOWN = "MOVE_EXPERIENCE_DOWN"

const professionalExperiences = (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_EXPERIENCE:
      return [
        {...DEFAULT_EXPERIENCE},
        ...state,
      ]
    case REMOVE_EXPERIENCE:
      return [
        ...state.filter((experience, index) => index !== payload)
        ]
    case UPDATE_EXPERIENCE:
      return [
        ...state.map((experience, index) => index === payload.index ? {...payload.experience} : experience)
      ]
    case RESET:
      return [
        ...initialState,
      ]
    case MOVE_EXPERIENCE_UP:
      return [
          ...state.map((element, index) => {
              if (index === payload - 1) return state[payload];
              else if (index === payload) return state[payload - 1];
              else return element;
          })
      ]
    case MOVE_EXPERIENCE_DOWN:
      return [
          ...state.map((element, index) => {
              if (index === payload + 1) return state[payload];
              else if (index === payload) return state[payload + 1];
              else return element;
          })
      ]
    default:
      return state
  }
}

export default professionalExperiences;

export const addExperience = () => ({type: ADD_EXPERIENCE});
export const removeExperienceAtIndex = index => ({type: REMOVE_EXPERIENCE, payload: index})
export const updateExperienceAtIndex = (experience, index) => ({type: UPDATE_EXPERIENCE, payload: {index, experience}})
export const moveExperienceAtIndexUp = index => ({type: MOVE_EXPERIENCE_UP, payload: index})
export const moveExperienceAtIndexDown = index => ({type: MOVE_EXPERIENCE_DOWN, payload: index})
export const reset = () => ({type: RESET})
