const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: [true, "Email Can't be empty"],
    match: [/^\S+@\S+\.\S+$/, 'Email is Invalid'],
  },
  message: {
    type: String,
  },
})

module.exports = mongoose.model('Messages', MessageSchema)
