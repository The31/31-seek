const mongoose = require('mongoose');
const db = require('./index.js');

const usersSchema = mongoose.Schema({
  username: { type: String, required: true, index: { unique: true }},
  password: { type: String, required: true },
  email: { type: String, required: true }
});

const Users = mongoose.model('Users', usersSchema);

module.exports.Users = Users;