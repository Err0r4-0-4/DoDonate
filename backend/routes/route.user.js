const express = require("express");
const userController = require("../controllers/controller.user");
const route = express.Router();

route.post("/login", userController.login);
route.post("/signup", userController.signup);
route.post("/reportUpload", userController.uploadReport);

module.exports = route;
