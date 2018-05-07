const initialState = "";

const RESET = "ACADEMIC_BACKGROUND_RESET";
const SET_SET_ACADEMIC_BACKGROUND = "SET_ACADEMIC_BACKGROUND"

const academicBackground = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_SET_ACADEMIC_BACKGROUND:
      return payload.toString()
    case RESET:
      return initialState.toString()
    default:
      return state
  }
}

export default academicBackground;

export const setAcademicBackground = text => ({type: SET_SET_ACADEMIC_BACKGROUND, payload: text});
export const reset = () => ({type: RESET})
