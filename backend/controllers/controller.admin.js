const Admin = require("../models/model.admin");
const Hospital = require("../models/model.hospital");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

console.log(process.env.email, process.env.password);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.email,
    pass: process.env.password,
  },
});

exports.login = async (req, res, next) => {
  try {
    let username = req.body.username.toLowerCase();
    let password = req.body.password.toLowerCase();
    let admin = await Admin.findOne({
      $and: [{ username: username }, { password: password }],
    });
    if (!admin) {
      res.status(400).send({ message: "admin not found!" });
      return;
    }
    const token = jwt.sign({ adminId: admin.id }, "secret", {
      expiresIn: "11h",
    });

    res.status(200).send({ token: token, adminId: admin.id });
    return;
  } catch (error) {
    console.log(error);
    res.status(200).send({ message: error.message });
    return;
  }
};

exports.registerHospital = async (req, res, next) => {
  try {
    let ethAddress = req.body.ethAddress;
    let email = req.body.email;
    let hospitalName = req.body.hospitalName;
    let city = req.body.city;
    let state = req.body.state;
    let randomPassword = Math.random().toString(36).slice(-8);
    let hospital = new Hospital({
      ethAddress: ethAddress,
      email: email,
      password: randomPassword,
      hospitalName: hospitalName,
      city: city,
      state: state,
    });
    var mailOptions = {
      from: process.env.email,
      to: email,
      subject: "Credentials for Your Account!",
      text: `Email: ${email} and Password: ${randomPassword} (Keep it safe and don't share this with anyone!)`,
    };
    await hospital.save();
    transporter
      .sendMail(mailOptions)
      .then(async (result) => {
        console.log(result);

        res.status(200).send({ message: "Hospital Added Successfully!" });
      })
      .catch((err) => {
        console.log(err);
        res.status(200).send({ message: error.message });
        return;
      });
  } catch (error) {
    console.log(error);
    res.status(200).send({ message: error.message });
    return;
  }
};
