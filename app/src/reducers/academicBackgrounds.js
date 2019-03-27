const initialState = [];

const DEFAULT_BACKGROUND = {
  degree: '',
  location: '',
  period: '',
  grade: '',
  option: '',
};

const RESET = 'ACADEMIC_BACKGROUND_RESET';
const ADD_BACKGROUND = 'ACADEMIC_BACKGROUNDS_ADD_BACKGROUND';
const REMOVE_BACKGROUND = 'ACADEMIC_BACKGROUNDS_REMOVE_BACKGROUND';
const UPDATE_BACKGROUND = 'ACADEMIC_BACKGROUNDS_UPDATE_BACKGROUND';
const MOVE_BACKGROUND_UP = 'MOVE_BACKGROUND_UP';
const MOVE_BACKGROUND_DOWN = 'MOVE_BACKGROUND_DOWN';

const academicBackgrounds = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_BACKGROUND:
      return [
        ...state,
        { ...DEFAULT_BACKGROUND },
      ];
    case REMOVE_BACKGROUND:
      return [
        ...state.filter((experience, index) => index !== payload),
      ];
    case UPDATE_BACKGROUND:
      return [
        ...state.map((bg, index) => (index === payload.index ? { ...payload.background } : bg)),
      ];
    case RESET:
      return initialState;
    case MOVE_BACKGROUND_UP:
      return [
        ...state.map((element, index) => {
          if (index === payload - 1) return state[payload];
          if (index === payload) return state[payload - 1];
          return element;
        }),
      ];
    case MOVE_BACKGROUND_DOWN:
      return [
        ...state.map((element, index) => {
          if (index === payload + 1) return state[payload];
          if (index === payload) return state[payload + 1];
          return element;
        }),
      ];
    default:
      return state;
  }
};

export default academicBackgrounds;

export const addAcademicBackground = () => ({ type: ADD_BACKGROUND });
export const removeAcademicBackgroundAtIndex = index => ({
  type: REMOVE_BACKGROUND,
  payload: index,
});
export const updateBackgroundAtIndex = (background, index) => ({
  type: UPDATE_BACKGROUND,
  payload: { index, background },
});
export const moveBackgroundAtIndexUp = index => ({ type: MOVE_BACKGROUND_UP, payload: index });
export const moveBackgroundAtIndexDown = index => ({ type: MOVE_BACKGROUND_DOWN, payload: index });
export const reset = () => ({ type: RESET });
