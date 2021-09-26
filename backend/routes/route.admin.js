const express = require("express");
const adminController = require("../controllers/controller.admin");
const route = express.Router();

route.post("/login", adminController.login);
route.post("/registerHospital", adminController.registerHospital);
//route.post("/signup", hospitalController.signup);

module.exports = route;
