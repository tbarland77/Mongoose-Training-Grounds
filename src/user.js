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
  posts: [ PostSchema ],
  likes: Number,
});
// virtual method can be used like joe.postCount which will return
// the post count for the user named joe
UserSchema.virtual('postCount').get(function () {
  return this.posts.length;
});
// represents entire collection of users not just a single user
const User = mongoose.model('user', UserSchema);

module.exports = User;
