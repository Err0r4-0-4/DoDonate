const User = require("../models/model.user");
const accountSid = process.env.accountSid;
const authToken = process.env.authToken;
const client = require("twilio")(accountSid, authToken);
const ipfsAPI = require("ipfs-api");
const ipfs = ipfsAPI("ipfs.infura.io", "5001", { protocol: "https" });
const jwt = require("jsonwebtoken");
exports.signup = async (req, res, next) => {
  try {
    console.log(req.body);
    let randomPassword = Math.random().toString(36).slice(-8);
    let response = await client.messages.create({
      body: `Aadhar: ${req.body.aadharNo} and Password: ${randomPassword} (Please do not share your Password with anyone!)`,
      from: process.env.phoneNo,
      to: "+91" + req.body.phoneNo,
    });
    let file = req.files.file;
    console.log(file);
    ipfs.add(file.data, async (err, file) => {
      console.log(file);
      if (err) {
        console.log(err);
        res.status(400).send({ message: err.message });
        return;
      }
      console.log(req.body);
      let aadharNo = req.body.aadharNo;
      let password = randomPassword;
      let user = new User({
        aadharNo: aadharNo,
        password: password,
        name: req.body.name,
        city: req.body.city,
        age: req.body.age,
        state: req.body.state,
        bgroup: req.body.bgroup,
        gender: req.body.gender,
        phoneNo: req.body.phoneNo,
        fileUrl: `https://ipfs.infura.io/ipfs/${file[0].path}`,
      });
      await user.save();
      res.status(200).send({ message: "User created!" });
      return;
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: error.message });
    return;
  }
};

exports.login = async (req, res, next) => {
  try {
    let aadharNo = req.body.aadharNo;
    let password = req.body.password;
    let user = await User.findOne({
      $and: [{ aadharNo: aadharNo }, { password: password }],
    });
    if (!user) {
      res.status(400).send({ message: "user not found!" });
      return;
    }
    const token = jwt.sign({ userId: user.id }, "secret", {
      expiresIn: "11h",
    });

    res.status(200).send({
      token: token,
      userId: user.id,
      aadharNo: aadharNo,
      fileUrl: user.fileUrl,
    });
    return;
  } catch (error) {
    res.status(200).send({ message: error.message });
    return;
  }
};

// exports.uploadReport = async (req, res, next) => {
//   let file = req.files.file;
//   console.log(file);
//   ipfs.add(file.data, async (err, file) => {
//     console.log(file);
//     if (err) {
//       console.log(err);
//       res.status(400).send({ message: err.message });
//       return;
//     }
//     try {
//       res
//         .status(200)
//         .send({ fileUrl: `https://ipfs.infura.io/ipfs/${file[0].path}` });
//     } catch (error) {
//       res.status(400).send({ message: error.message });
//     }
//   });
// };
