const Contact = require("../models/Contact");

exports.addContact = async (req, res) => {
  let { name, email, age } = req.body;
  age = Number(age);
  try {
    const contact = new Contact({
      name,
      email,
      age,
    });
    await contact.save();
    res.send({ msg: "contact added", contact });
  } catch (error) {
    res.status(500).send("server error");
  }
};
exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.send(contacts);
  } catch (error) {
    res.status(500).send("server error");
  }
};
exports.deleteConatct = async (req, res) => {
  const { contactId } = req.params;
  try {
    await Contact.findByIdAndDelete(contactId);
    res.send("contact delelted");
  } catch (error) {
    res.status(500).send("server error");
  }
};
exports.updateContact = async (req, res) => {
  const { contactId } = req.params;
  try {
    await Contact.findByIdAndUpdate(contactId, {
      $set: { ...req.body },
    });
    res.send("contact update");
  } catch (error) {
    res.status(500).send("server error");
  }
};
exports.getOneContact = async (req, res) => {
  const { contactId } = req.params;
  try {
    const contact = await Contact.findById(contactId);
    res.send(contact);
  } catch (error) {
    res.status(500).send("server error");
  }
};
