const mongoose = require("mongoose");

const schema = mongoose.Schema;

const hospitalSchema = new schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  ethAddress: {
    type: String,
    required: true,
  },
  hospitalName: {
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
});

module.exports = mongoose.model("hospital", hospitalSchema);
