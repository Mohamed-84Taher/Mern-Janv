import axios from "axios";
import {
  GET_ALL_CONTACTS,
  GET_CONTACT,
  TOGGLE_FALSE,
  TOGGLE_TRUE,
} from "../types";

export const getAllContacts = () => async dispatch => {
  try {
    const res = await axios.get("/api/contacts");
    dispatch({ type: GET_ALL_CONTACTS, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

// add new contact
export const addContact = formData => async dispatch => {
  try {
    await axios.post("/api/contacts", formData);
    dispatch(getAllContacts());
  } catch (error) {
    console.log(error);
  }
};

// remove contact
export const deleteContact = id => async dispatch => {
  try {
    await axios.delete(`/api/contacts/${id}`);
    dispatch(getAllContacts());
  } catch (error) {
    console.log(error);
  }
};
// update contact
export const editContact = (id, formData) => async dispatch => {
  try {
    await axios.put(`/api/contacts/${id}`, formData);
    dispatch(getAllContacts());
  } catch (error) {
    console.log(error);
  }
};

export const toggleTrue = () => {
  return {
    type: TOGGLE_TRUE,
  };
};
export const toggleFalse = () => {
  return {
    type: TOGGLE_FALSE,
  };
};
// get one contact
export const getOneContact = id => async dispatch => {
  try {
    const res = await axios.get(`/api/contacts/${id}`);
    dispatch({ type: GET_CONTACT, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
