const express = require("express");
const userController = require("../Controllers/userController");
const authController = require("../Controllers/authController");
const Router = express.Router();

Router.route("/signup").post(authController.signup);
Router.route("/login").post(authController.login);

Router.use(authController.protect);

Router.patch("/updateMyPassword", authController.updatePassword);
Router.get("/me", userController.getMe, userController.getUser);
Router.patch("/updateMe", userController.updateMe);
Router.delete("/deleteMe", userController.deleteMe);

Router.use(authController.restrictTo("admin"));

Router.route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser);

Router.route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = Router;
