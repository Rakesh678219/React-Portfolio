require('ssl-root-cas').inject() // Ensures trusted root CAs
require('dotenv').config()
const express = require('express')
const axios = require('axios')
const cors = require('cors')

const app = express()
const PORT = 6000

app.use(cors())
app.use(express.json())

app.get('/api/devto', async (req, res) => {
  try {
    const response = await axios.get('https://dev.to/api/articles/me', {
      headers: { 'api-key': process.env.DEVTO_API_KEY },
    })
    res.json(response.data)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
