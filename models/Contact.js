const mongoose = require("mongoose");
const schema = mongoose.Schema;

const contactSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    toLowerCase: true,
  },
  age: Number,
  gender: String,
});
module.exports = mongoose.model("Contact", contactSchema);
