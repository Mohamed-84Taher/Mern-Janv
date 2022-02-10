import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleFalse } from "../redux/actions/contactActions";

function Home() {
  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "500px",
      }}
    >
      <Link to='/contacts'>
        <Button variant='primary' style={{ marginRight: "30px" }}>
          Contacts List
        </Button>
      </Link>
      <Link to='/addEdit'>
        <Button variant='primary' onClick={() => dispatch(toggleFalse())}>
          Add Contact
        </Button>
      </Link>
    </div>
  );
}

export default Home;
