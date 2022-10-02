const express = require('express')
const router = express.Router()

const Message = require('../models/Message')

//Get back all the messages
router.get('/', async (req, res) => {
  try {
    const messages = await Message.find()
    res.json(messages)
  } catch (err) {
    res.json({ message: err })
  }
})

//submits message
router.post('/', async (req, res) => {
  const message = new Message({
    fullName: req.body.fullName,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    message: req.body.message,
  })
  try {
    const savedMessageData = await message.save()
    res.json(savedMessageData)
  } catch (err) {
    res.json({ message: err })
  }
})

module.exports = router
