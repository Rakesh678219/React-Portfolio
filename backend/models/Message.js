const mongoose = require('mongoose')

const MessageSchema = mongoose.Schema({
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
    required: true,
  },
  message: {
    type: String,
  },
})

module.exports = mongoose.model('Messages', MessageSchema)
