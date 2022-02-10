import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addContact, editContact } from "../redux/actions/contactActions";

function AddEdit() {
  const [formData, setFormData] = useState({ name: "", age: 0, email: "" });
  const edit = useSelector(state => state.contactReducer.edit);
  const contact = useSelector(state => state.contactReducer.contact);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // add new contact
  const handleAdd = e => {
    e.preventDefault();
    dispatch(addContact(formData));
    navigate("/contacts");
  };
  const handleEdit = e => {
    e.preventDefault();
    dispatch(editContact(contact._id, formData));
    navigate("/contacts");
  };
  useEffect(() => {
    edit
      ? setFormData({
          name: contact.name,
          email: contact.email,
          age: contact.age,
        })
      : setFormData({ name: "", age: 0, email: "" });
  }, [contact]);
  return (
    <Form style={{ width: "50%", margin: "auto", padding: "80px" }}>
      <Form.Group className='mb-3' controlId='formBasicText'>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter your name'
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type='email'
          placeholder='Enter email'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicNumber'>
        <Form.Label>Age</Form.Label>
        <Form.Control
          type='number'
          placeholder='Enter your age'
          name='age'
          value={formData.age}
          onChange={handleChange}
        />
      </Form.Group>
      {edit ? (
        <Button variant='primary' type='submit' onClick={handleEdit}>
          Edit
        </Button>
      ) : (
        <Button variant='primary' type='submit' onClick={handleAdd}>
          Add
        </Button>
      )}
    </Form>
  );
}

export default AddEdit;
