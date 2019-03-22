const initialState = [];

const DEFAULT_REFERENCE = {
  name: '',
  email: '',
  phone: '',
};

const RESET = 'REFERENCES_RESET';
const ADD_REFERENCE = 'REFERENCES_ADD_REFERENCE';
const REMOVE_REFERENCE = 'REFERENCES_REMOVE_REFERENCE';
const UPDATE_REFERENCE = 'REFERENCES_UPDATE_REFERENCE';
const MOVE_REFERENCE_UP = 'MOVE_REFERENCE_UP';
const MOVE_REFERENCE_DOWN = 'MOVE_REFERENCE_DOWN';

const references = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_REFERENCE:
      return [
        { ...DEFAULT_REFERENCE },
        ...state,
      ];
    case REMOVE_REFERENCE:
      return [
        ...state.filter((reference, index) => index !== payload),
      ];
    case UPDATE_REFERENCE:
      return [
        ...state.map((reference, index) => (index === payload.index ? { ...payload.reference } : reference)),
      ];
    case RESET:
      return [
        ...initialState,
      ];
    case MOVE_REFERENCE_UP:
      return [
        ...state.map((element, index) => {
          if (index === payload - 1) return state[payload];
          if (index === payload) return state[payload - 1];
          return element;
        }),
      ];
    case MOVE_REFERENCE_DOWN:
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

export default references;

export const addReference = () => ({ type: ADD_REFERENCE });
export const removeReferenceAtIndex = index => ({ type: REMOVE_REFERENCE, payload: index });
export const updateReferenceAtIndex = (reference, index) => ({
  type: UPDATE_REFERENCE,
  payload: { index, reference },
});
export const moveReferenceAtIndexUp = index => ({ type: MOVE_REFERENCE_UP, payload: index });
export const moveReferenceAtIndexDown = index => ({ type: MOVE_REFERENCE_DOWN, payload: index });
export const reset = () => ({ type: RESET });
