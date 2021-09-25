const express = require("express");
const adminController = require("../controllers/controller.admin");
const route = express.Router();

route.post("/login", adminController.login);
module.exports = route;
