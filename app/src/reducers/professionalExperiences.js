const initialState = [];

const DEFAULT_EXPERIENCE = {
  companyName: '',
  role: '',
  tasks: '',
  methodology: '',
}

const RESET = "PROFESSIONAL_EXPERIENCES_RESET";
const ADD_EXPERIENCE = "PROFESSIONAL_EXPERIENCES_ADD_EXPERIENCE"
const REMOVE_EXPERIENCE = "PROFESSIONAL_EXPERIENCES_REMOVE_EXPERIENCE"
const UPDATE_EXPERIENCE = "PROFESSIONAL_EXPERIENCES_UPDATE_EXPERIENCE"

const professionalExperiences = (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_EXPERIENCE:
      return [
        ...state,
        {...DEFAULT_EXPERIENCE},
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
    default:
      return state
  }
}

export default professionalExperiences;

export const addExperience = () => ({type: ADD_EXPERIENCE});
export const removeExperienceAtIndex = index => ({type: REMOVE_EXPERIENCE, payload: index})
export const updateExperienceAtIndex = (experience, index) => ({type: UPDATE_EXPERIENCE, payload: {index, experience}})
export const reset = () => ({type: RESET})
