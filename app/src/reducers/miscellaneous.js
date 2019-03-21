const initialState = '';

const RESET = 'MISCELLANEOUS_RESET';
const SET_MISCELLANEOUS_INFO = 'SET_MISCELLANEOUS_INFO';

const miscellaneous = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_MISCELLANEOUS_INFO:
      return payload.toString();
    case RESET:
      return initialState.toString();
    default:
      return state;
  }
};

export default miscellaneous;

export const setMiscellaneousInfo = text => ({ type: SET_MISCELLANEOUS_INFO, payload: text });
export const reset = () => ({ type: RESET });
