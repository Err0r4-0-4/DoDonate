const Hospital = require("../models/model.hospital");
const Patient = require("../models/model.patient");
const jwt = require("jsonwebtoken");
exports.login = async (req, res, next) => {
  try {
    let email = req.body.email.toLowerCase();
    let password = req.body.password.toLowerCase();
    let hospital = await Hospital.findOne({
      $and: [{ email: email }, { password: password }],
    });
    if (!hospital) {
      res.status(400).send({ message: "hospital not found!" });
      return;
    }
    const token = jwt.sign({ hospitalId: hospital.id }, "secret", {
      expiresIn: "11h",
    });

    res.status(200).send({ token: token, hospitalId: hospital.id });
    return;
  } catch (error) {
    res.status(400).send({ message: error.message });
    return;
  }
};

exports.addPatientData = async (req, res, next) => {
  try {
    let patient = new Patient({
      ...req.body,
      date: new Date(),
    });
    await patient.save();
    res.status(200).send({ message: "Data Added Successfully!" });
    return;
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: error.message });
    return;
  }
};

exports.getPatientData = async (req, res, next) => {
  try {
    let patients = await Patient.find({ hospitalId: req.query.hospitalId });
    res.status(200).send({ data: patients });
    return;
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: error.message });
    return;
  }
};

exports.getHospital = async (req, res, next) => {
  try {
    let hospitals = await Hospital.find({}).select("-password");
    res.status(200).send({ data: hospitals });
    return;
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: error.message });
    return;
  }
};
