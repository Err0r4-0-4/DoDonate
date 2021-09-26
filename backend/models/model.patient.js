const mongoose = require("mongoose");

const schema = mongoose.Schema;

const patientDataSchema = new schema({
  hospitalId: {
    type: String,
    required: true,
  },
  aadharNo: {
    type: String,
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
  bgroup: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("patientData", patientDataSchema);
