import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllContacts } from "../redux/actions/contactActions";
import ContactCard from "./ContactCard";

function Contacts() {
  const contacts = useSelector(state => state.contactReducer.contacts);
  const dispatch = useDispatch();

  // get contacts
  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        width: "90%",
        flexWrap: "wrap",
        margin: "auto",
        padding: "80px",
      }}
    >
      {contacts.map(contact => (
        <ContactCard contact={contact} key={contact._id} />
      ))}
    </div>
  );
}

export default Contacts;
