const mongooose = require("mongoose");

const userSchema = mongooose.Schema({
  name: String,
  email: String,
  password: String,
});

const UserModel = mongooose.model("user", userSchema);

module.exports = {
  UserModel,
};
