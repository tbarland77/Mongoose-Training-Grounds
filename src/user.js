const mongoose = require('mongoose');
const PostSchema = require('./post');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    validate: {
      validator: (name) => name.length > 2,
      message: 'Name must be longer then 2 characters.',
    },
    required: [ true, 'Name is required' ],
  },
  postCount: Number,
  posts: [ PostSchema ],
});
// represents entire collection of users not just a single user
const User = mongoose.model('user', UserSchema);

module.exports = User;
