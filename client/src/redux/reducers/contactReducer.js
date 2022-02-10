import {
  GET_ALL_CONTACTS,
  GET_CONTACT,
  TOGGLE_FALSE,
  TOGGLE_TRUE,
} from "../types";

const initState = {
  contacts: [],
  contact: null,
  loading: true,
  edit: false,
};
const contactReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_ALL_CONTACTS:
      return { ...state, contacts: payload, loading: false };
    case TOGGLE_TRUE:
      return { ...state, edit: true };
    case TOGGLE_FALSE:
      return { ...state, edit: false };
    case GET_CONTACT:
      return { ...state, contact: payload, loading: false };
    default:
      return state;
  }
};
export default contactReducer;
