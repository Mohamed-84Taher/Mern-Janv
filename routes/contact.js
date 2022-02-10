const express = require("express");
const {
  addContact,
  getAllContacts,
  deleteConatct,
  updateContact,
  getOneContact,
} = require("../controllers/contactController");

const router = express.Router();

// desc add new contact
// method post
// req.body
// url /api/contacts
router.post("/", addContact);

// desc get all contacts
// method get
router.get("/", getAllContacts);

// desc delete contact
// method delete
// req.params
router.delete("/:contactId", deleteConatct);

// desc update contact
// method put
// req.body
// req.params
router.put("/:contactId", updateContact);

// desc get one contact
// method get
// req.params
router.get("/:contactId", getOneContact);

module.exports = router;
