const express = require("express");
const router = express.Router();
//
const {
  allUsersController,
  createUserController,
  deleteUserController,
} = require("../Cntrollers/user.controller");

//
router.get("/", allUsersController);
router.post("/", createUserController);
router.delete("/:id", deleteUserController);

module.exports = router;
