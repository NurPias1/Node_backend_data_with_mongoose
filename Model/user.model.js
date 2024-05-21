const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /\d{11}/.test(v);
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
    unique: true,
  },
  age: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /\d{2}/.test(v);
      },
      message: (props) => `${props.value} is not a valid age!`,
    },
  },
  address: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
