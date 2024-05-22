const User = require("../Model/user.model");
const { v4: uuidv4 } = require("uuid");
const shortid = require('shortid');

//all user
const allUsersController = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
//one user
const oneUserController = (req, res) => {
  res.status(200).json({ massage: " one users akhane" });
};
// creat user
const createUserController = async (req, res) => {
  try {
    const newUser = new User({
      id: shortid.generate(),
      name: req.body.name,
      phone: req.body.phone,
      age: req.body.age,
      sex: req.body.sex,
      address: req.body.address,
    });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const updateUserController = (req, res) => {
  res.status(200).json({ massage: " update" });
};
const deleteUserController = async (req, res) => {
  try {
    await User.deleteOne({ id: req.params.id });
     res.status(200).json({ message: "user is deleted" });
  } catch (error) {
    res.status(500).json(error.massage);
  }
};
module.exports = {
  allUsersController,
  oneUserController,
  createUserController,
  updateUserController,
  deleteUserController,
};
