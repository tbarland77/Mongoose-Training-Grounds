const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema ({
  name: String
});
// represents entire collection of users not just a single user
const User = mongoose.model('user', UserSchema);

module.exports = User;
