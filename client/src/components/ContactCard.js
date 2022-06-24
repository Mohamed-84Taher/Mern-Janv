import React, { useState } from "react";
import { Card, ListGroup, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deleteContact,
  getOneContact,
  toggleTrue,
} from "../redux/actions/contactActions";

function ContactCard({ contact }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDelete = () => {
    if (window.confirm("Are you sure")) {
      dispatch(deleteContact(contact._id));
    }
  };
  // handleEdit
  const handleEdit = () => {
    dispatch(getOneContact(contact._id));
    dispatch(toggleTrue());
    navigate("/addEdit");
  };
  return (
    <Card style={{ width: "18rem", marginBottom: "30px" }}>
      <Card.Header>
        <i className='fas fa-user-tie'></i>
      </Card.Header>
      <ListGroup variant='flush'>
        <ListGroup.Item>Name :{contact.name}</ListGroup.Item>
        <ListGroup.Item>Email :{contact.email}</ListGroup.Item>
        <ListGroup.Item>Age :{contact.age}</ListGroup.Item>
        <ListGroup.Item>
          <Form>
            <Form.Check
              inline
              label='male'
              name='group1'
              type='radio'
              checked={contact.gender === "male"}
            />
            <Form.Check
              inline
              label='female'
              name='group1'
              type='radio'
              checked={contact.gender === "female"}
            />
          </Form>
        </ListGroup.Item>
      </ListGroup>
      <Card.Body style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button variant='danger' onClick={handleDelete}>
          delete
        </Button>
        <Button variant='info' onClick={handleEdit}>
          edit
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ContactCard;
