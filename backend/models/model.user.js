const mongoose = require("mongoose");

const schema = mongoose.Schema;

const userSchema = new schema({
  aadharNo: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  bgroup: {
    type: String,
    required: true,
  },
  gender: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("user", userSchema);
