const express = require("express");
const userController = require("../controllers/controller.user");
const route = express.Router();

route.post("/login", userController.login);
route.post("/signup", userController.signup);

module.exports = route;
