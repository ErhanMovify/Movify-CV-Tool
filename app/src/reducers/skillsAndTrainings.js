const initialState = "";

const RESET = "SKILLS_AND_TRAININGS_RESET";
const SET_SET_SKILLS_AND_TRAININGS = "SET_SKILLS_AND_TRAININGS"

const skillsAndTrainings = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_SET_SKILLS_AND_TRAININGS:
      return payload.toString()
    case RESET:
      return initialState.toString()
    default:
      return state
  }
}

export default skillsAndTrainings;

export const setSkillsAndTrainings = text => ({type: SET_SET_SKILLS_AND_TRAININGS, payload: text});
export const reset = () => ({type: RESET})
