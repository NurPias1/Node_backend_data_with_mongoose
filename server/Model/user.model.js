const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
  },
  phone: {
    type: String,
    // validate: {
    //   validator: function (v) {
    //     return /\d{11}/.test(v);
    //   },
    //   message: (props) => `${props.value} is not a valid phone number!`,
    // },
    unique: true,
    sparse: true,
    partialFilterExpression: { mobile: { $type: "string" } },
    background: true,
  },
  age: {
    type: String,
    validate: {
      validator: function (v) {
        return /\d{2}/.test(v);
      },
      message: (props) => `${props.value} is not a valid age!`,
    },
  },
  address: {
    type: String,
  },
  sex: {
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema);
