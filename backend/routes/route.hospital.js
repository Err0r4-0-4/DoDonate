const express = require("express");
const hospitalController = require("../controllers/controller.hospital");
const route = express.Router();

route.post("/login", hospitalController.login);
//route.post("/addHospital", hospitalController.addHospital);
route.post("/addPatientData", hospitalController.addPatientData);
route.get("/getPatientData", hospitalController.getPatientData);
route.get("/getHospital", hospitalController.getHospital);
//route.post("/signup", hospitalController.signup);

module.exports = route;
