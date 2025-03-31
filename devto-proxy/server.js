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
    const { page = 1 } = req.query // Default page = 1
    const per_page = 1000 // Always 1000

    const response = await axios.get('https://dev.to/api/articles/me', {
      headers: { 'api-key': process.env.DEVTO_API_KEY },
      params: { page, per_page }, // Ensure API gets both values
    })

    res.json(response.data)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
