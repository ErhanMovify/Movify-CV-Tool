const initialState = {
  firstName: '',
  lastName: '',
  position: '',
  email: '',
  phone: '',
  country: 'BE',
  executiveSummary: '',
};

const SET_FIRSTNAME = 'BASIC_INFO_SET_FIRSTNAME';
const SET_LASTNAME = 'BASIC_INFO_SET_LASTNAME';
const SET_POSITION = 'BASIC_INFO_SET_POSITION';
const SET_EMAIL = 'BASIC_INFO_SET_EMAIL';
const SET_PHONE = 'BASIC_INFO_SET_PHONE';
const SET_COUNTRY = 'BASIC_INFO_SET_COUNTRY';
const SET_EXECUTIVE_SUMMARY = 'BASIC_INFO_SET_EXECUTIVE_SUMMARY';
const RESET = 'BASIC_INFO_RESET';

const basicInfo = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_FIRSTNAME:
      return {
        ...state,
        firstName: payload,
      };
    case SET_LASTNAME:
      return {
        ...state,
        lastName: payload,
      };
    case SET_POSITION:
      return {
        ...state,
        position: payload,
      };
    case SET_EMAIL:
      return {
        ...state,
        email: payload,
      };
    case SET_PHONE:
      return {
        ...state,
        phone: payload,
      };
    case SET_COUNTRY:
      return {
        ...state,
        country: payload,
      };
    case SET_EXECUTIVE_SUMMARY:
      return {
        ...state,
        executiveSummary: payload,
      };
    case RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default basicInfo;

export const setFirstName = firstName => ({ type: SET_FIRSTNAME, payload: firstName });
export const setLastName = lastName => ({ type: SET_LASTNAME, payload: lastName });
export const setPosition = position => ({ type: SET_POSITION, payload: position });
export const setEmail = email => ({ type: SET_EMAIL, payload: email });
export const setPhone = phone => ({ type: SET_PHONE, payload: phone });
export const setCountry = country => ({ type: SET_COUNTRY, payload: country });
export const setExecutiveSummary = executiveSummary => ({
  type: SET_EXECUTIVE_SUMMARY,
  payload: executiveSummary,
});
export const reset = () => ({ type: RESET });
